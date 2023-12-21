import React from 'react';
import { Card } from 'antd';
import { FacebookOutlined, InstagramOutlined, WhatsAppOutlined, ToTopOutlined } from '@ant-design/icons';

interface RedSocialProps {
  nombre: string;
  url: string;
  qrCodeImagePath: string;
}

const RedSocialCard: React.FC<RedSocialProps> = ({ nombre, url, qrCodeImagePath }) => {
  const { Meta } = Card;

  const getIconComponent = () => {
    switch (nombre.toLowerCase()) {
      case 'facebook':
        return <FacebookOutlined />;
      case 'instagram':
        return <InstagramOutlined />;
      case 'whatsapp':
        return <WhatsAppOutlined />;
      case 'tiktok':
        return <ToTopOutlined/>;
      default:
        return null;
    }
  };

  return (
    <Card
      hoverable
      style={{ width: 240, margin: '10px', textAlign: 'center' }}
      cover={<img alt={`${nombre} QR Code`} src={qrCodeImagePath} style={{ width: '200px', height: '200px', margin: '0 auto' }} />}
    >
      {getIconComponent()}
      <Meta title={nombre} description={`Síguenos en ${nombre}`} />
      <a href={url} className={`social-button ${nombre.toLowerCase()}`} style={{ display: 'block', marginTop: '10px', padding: '10px', backgroundColor: '#1890ff', color: '#fff', borderRadius: '4px', textDecoration: 'none' }}>
        Síguenos
      </a>
    </Card>
  );
};

export default RedSocialCard;
