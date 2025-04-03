import { useTranslation } from "react-i18next";
import styles from "./occupation.module.css";
import { useEffect, useState } from "react";

export default function Occupation() {
  const [isMobile, setIsMobile] = useState<boolean>();
  const { t } = useTranslation();

  useEffect(() => {
    if (window.innerWidth < 880) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <section className={styles.occupation}>
      {isMobile ? (
        <h2>{t("title")}</h2>
      ) : (
        <>
          <h2 className={styles.title_desktop_1}>{t("title-part-1")}</h2>
          <h2 className={styles.title_desktop_2}>{t("title-part-2")}</h2>
        </>
      )}
      <p>{t('situation')}</p>
    </section>
  );
}
