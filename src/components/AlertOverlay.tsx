import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AlertOverlayProps {
  predictedYear: number;
}

const AlertOverlay: React.FC<AlertOverlayProps> = ({ predictedYear }) => {
  const [showAlert, setShowAlert] = useState(false);
  
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setShowAlert(predictedYear <= currentYear + 5);
  }, [predictedYear]);
  
  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          className="alert-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 0, 0, 0.15)',
            zIndex: 100,
            pointerEvents: 'none'
          }}
        >
          <motion.div
            className="alert-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ff0000',
              fontWeight: 'bold',
              fontSize: '24px',
              textShadow: '0 0 10px rgba(255, 0, 0, 0.7)',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '10px 20px',
              borderRadius: '5px'
            }}
          >
            ⚠️ 注意：AI影响即将到来 ⚠️
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertOverlay; 