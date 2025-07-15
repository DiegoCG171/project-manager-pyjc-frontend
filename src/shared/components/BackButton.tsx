import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  to?: string | number; 
  text?: string;        
}

export const BackButton = ({ to = -1, text = 'Regresar' }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof to === 'number') {
      navigate(to);
    } else {
      navigate(to);
    }
  };

  return (
    <div>
      <Button
        icon={<ArrowLeftOutlined />}
        type="text"
        onClick={handleClick}
        style={{ marginRight: 12 }}
      >
        {text}
      </Button>
    </div>
  );
};
