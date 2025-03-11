import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface JobIcon3DProps {
  jobId: string;
  riskLevel: 'low' | 'medium' | 'high';
}

// 获取风险等级对应的颜色
const getRiskColor = (riskLevel: 'low' | 'medium' | 'high'): string => {
  switch (riskLevel) {
    case 'low':
      return '#4CAF50'; // 绿色
    case 'medium':
      return '#FF9800'; // 橙色
    case 'high':
      return '#F44336'; // 红色
    default:
      return '#2196F3'; // 蓝色
  }
};

// 创建职业图标的3D模型
const JobModel: React.FC<JobIcon3DProps> = ({ jobId, riskLevel }) => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  // 颜色
  const color = useMemo(() => new THREE.Color(getRiskColor(riskLevel)), [riskLevel]);
  
  // 粒子系统
  const particleCount = useMemo(() => {
    return riskLevel === 'low' ? 50 : riskLevel === 'medium' ? 100 : 150;
  }, [riskLevel]);
  
  const [particlePositions, particleSizes] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      // 在球体表面生成粒子
      const radius = 1.5;
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // 随机大小
      sizes[i] = Math.random() * 0.1 + 0.05;
    }
    
    return [positions, sizes];
  }, [particleCount]);
  
  // 动画
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // 旋转整个组
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
    
    if (materialRef.current) {
      // 脉冲发光效果
      const pulseIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.3;
      materialRef.current.emissiveIntensity = pulseIntensity;
    }
    
    if (particlesRef.current) {
      // 粒子动画
      const time = clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // 计算到中心的距离
        const dist = Math.sqrt(x * x + y * y + z * z);
        
        // 根据风险等级调整粒子行为
        const speed = riskLevel === 'low' ? 0.1 : 
                     riskLevel === 'medium' ? 0.2 : 0.3;
        
        // 脉动效果
        const pulseFactor = 1 + Math.sin(time * speed + i * 0.1) * 0.1;
        
        // 更新位置
        positions[i3] = (x / dist) * 1.5 * pulseFactor;
        positions[i3 + 1] = (y / dist) * 1.5 * pulseFactor;
        positions[i3 + 2] = (z / dist) * 1.5 * pulseFactor;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  // 根据职业ID选择不同的几何体
  const renderJobGeometry = () => {
    switch (jobId) {
      case 'programmer':
        return (
          <>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshStandardMaterial 
              ref={materialRef}
              color={color} 
              metalness={0.8}
              roughness={0.2}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </>
        );
      case 'doctor':
        return (
          <>
            <sphereGeometry args={[0.7, 32, 32]} />
            <meshStandardMaterial 
              ref={materialRef}
              color={color} 
              metalness={0.5}
              roughness={0.3}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </>
        );
      case 'teacher':
        return (
          <>
            <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
            <meshStandardMaterial 
              ref={materialRef}
              color={color} 
              metalness={0.6}
              roughness={0.4}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </>
        );
      case 'driver':
        return (
          <>
            <torusGeometry args={[0.5, 0.2, 16, 32]} />
            <meshStandardMaterial 
              ref={materialRef}
              color={color} 
              metalness={0.7}
              roughness={0.3}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </>
        );
      default:
        return (
          <>
            <octahedronGeometry args={[0.7, 0]} />
            <meshStandardMaterial 
              ref={materialRef}
              color={color} 
              metalness={0.6}
              roughness={0.3}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </>
        );
    }
  };
  
  return (
    <group ref={groupRef}>
      {/* 中心图标 */}
      <mesh castShadow>
        {renderJobGeometry()}
      </mesh>
      
      {/* 粒子系统 */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particlePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particleCount}
            array={particleSizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.1} 
          color={color} 
          transparent 
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
      
      {/* 光环效果 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.3, 32]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const JobIcon3D: React.FC<JobIcon3DProps> = ({ jobId, riskLevel }) => {
  return (
    <div className="job-icon-3d">
      <h3>职业变革程度: {riskLevel === 'low' ? '低' : riskLevel === 'medium' ? '中' : '高'}</h3>
      <div className="icon-container" style={{ height: '250px', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 4] }} shadows>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-5, -5, 5]} intensity={0.5} />
          
          <JobModel jobId={jobId} riskLevel={riskLevel} />
          
          {/* 添加后期处理效果 */}
          <fog attach="fog" args={[0x000000, 3.5, 7]} />
        </Canvas>
        
        {/* 添加风险等级标签 */}
        <div className="risk-label" style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '5px 15px',
          borderRadius: '20px',
          backgroundColor: getRiskColor(riskLevel) + '20',
          border: `1px solid ${getRiskColor(riskLevel)}`,
          color: getRiskColor(riskLevel),
          fontWeight: 'bold',
          boxShadow: `0 0 10px ${getRiskColor(riskLevel)}80`
        }}>
          {riskLevel === 'low' ? '低度变革' : 
           riskLevel === 'medium' ? '中度变革' : '高度变革'}
        </div>
      </div>
    </div>
  );
};

export default JobIcon3D; 