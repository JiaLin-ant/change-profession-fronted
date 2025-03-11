import React, { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';

interface StarfieldBackgroundProps {
  predictedYear: number;
}

const StarfieldBackground: React.FC<StarfieldBackgroundProps> = ({ predictedYear }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  
  // 根据预测年份计算星星密度和速度
  const { starCount, starSpeed } = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const yearDiff = predictedYear - currentYear;
    
    // 近期预测(5年内)：密集星空，快速移动
    // 远期预测(30年以上)：稀疏星空，缓慢移动
    const density = yearDiff < 5 ? 2000 : 
                   yearDiff < 15 ? 1500 :
                   yearDiff < 30 ? 1000 : 500;
                   
    const speed = yearDiff < 5 ? 0.03 : 
                 yearDiff < 15 ? 0.02 :
                 yearDiff < 30 ? 0.01 : 0.005;
                 
    return { starCount: density, starSpeed: speed };
  }, [predictedYear]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // 初始化Three.js
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    // 创建场景
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;
    cameraRef.current = camera;
    
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0.1); // 半透明黑色背景
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // 创建星星
    const starsGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);
    
    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      // 随机位置
      starPositions[i3] = (Math.random() - 0.5) * 200;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 200;
      starPositions[i3 + 2] = (Math.random() - 0.5) * 200;
      
      // 随机大小
      starSizes[i] = Math.random() * 2;
      
      // 颜色 - 根据预测年份调整
      const yearDiff = predictedYear - new Date().getFullYear();
      if (yearDiff < 5) {
        // 近期预测：偏红色
        starColors[i3] = 0.8 + Math.random() * 0.2; // R
        starColors[i3 + 1] = 0.1 + Math.random() * 0.3; // G
        starColors[i3 + 2] = 0.1 + Math.random() * 0.3; // B
      } else if (yearDiff < 15) {
        // 中期预测：偏黄色
        starColors[i3] = 0.7 + Math.random() * 0.3; // R
        starColors[i3 + 1] = 0.7 + Math.random() * 0.3; // G
        starColors[i3 + 2] = 0.1 + Math.random() * 0.2; // B
      } else {
        // 远期预测：偏蓝色
        starColors[i3] = 0.1 + Math.random() * 0.3; // R
        starColors[i3 + 1] = 0.3 + Math.random() * 0.4; // G
        starColors[i3 + 2] = 0.7 + Math.random() * 0.3; // B
      }
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starsGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
      size: 1,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    starsRef.current = stars;
    
    // 动画循环
    let animationFrameId: number;
    
    const animate = () => {
      if (starsRef.current) {
        // 旋转星空
        starsRef.current.rotation.x += starSpeed * 0.1;
        starsRef.current.rotation.y += starSpeed * 0.15;
        
        // 移动星星 - 创建拖尾效果
        const positions = starsRef.current.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < starCount; i++) {
          const i3 = i * 3;
          positions[i3 + 2] += starSpeed * (Math.random() + 0.5);
          
          // 如果星星移动到太远，重置位置
          if (positions[i3 + 2] > 100) {
            positions[i3 + 2] = -100;
          }
        }
        starsRef.current.geometry.attributes.position.needsUpdate = true;
      }
      
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // 清理函数
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
    };
  }, [starCount, starSpeed, predictedYear]);
  
  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default StarfieldBackground; 