import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const QRResumeCard = () => {
  const { t } = useLanguage();
  
  return (
    <Card className="glass-card shadow-soft hover-glow group">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-white mb-4 shadow-glow group-hover:scale-110 transition-transform duration-500">
          <QrCode className="w-8 h-8" />
        </div>
        <CardTitle className="text-2xl font-bold">
          {t('language') === 'fr' ? 'QR Code CV' : 'Resume QR Code'}
        </CardTitle>
        <p className="text-muted-foreground">
          {t('language') === 'fr' 
            ? 'Scannez pour voir mon CV complet' 
            : 'Scan to view my complete resume'}
        </p>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="relative mx-auto w-48 h-48 bg-white rounded-xl p-4 shadow-elegant group-hover:scale-105 transition-transform duration-500">
          <img 
            src="/lovable-uploads/4c6a681e-8f5a-4852-8378-84f5cf5a264b.png"
            alt="Resume QR Code"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button 
            variant="premium" 
            size="sm"
            className="group/btn"
            asChild
          >
            <a href="/lovable-uploads/4c6a681e-8f5a-4852-8378-84f5cf5a264b.png" target="_blank" rel="noopener noreferrer">
              <Eye className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
              {t('language') === 'fr' ? 'Voir le QR Code' : 'View QR Code'}
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="group/btn"
            asChild
          >
            <a href="/lovable-uploads/4c6a681e-8f5a-4852-8378-84f5cf5a264b.png" download="badr-moutaouakil-resume-qr.png">
              <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform duration-300" />
              {t('language') === 'fr' ? 'Télécharger' : 'Download'}
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRResumeCard;