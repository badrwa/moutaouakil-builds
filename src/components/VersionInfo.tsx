import { useLanguage } from '@/contexts/LanguageContext';

const VersionInfo = () => {
  const { t } = useLanguage();
  
  return (
    <div className="fixed bottom-4 left-4 z-50 opacity-50 hover:opacity-100 transition-opacity duration-300">
      <div className="glass-card px-3 py-1 rounded-lg text-xs text-muted-foreground">
        {t('version')}
      </div>
    </div>
  );
};

export default VersionInfo;