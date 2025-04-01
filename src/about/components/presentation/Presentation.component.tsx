import { useTranslation } from "react-i18next";
import data from "../../../data/data.json";
import { useEffect, useState } from "react";
import styles from "./Presentation.module.css";

export default function Presentation() {
  const [isFrench, setIsFrench] = useState<boolean>(true);
  const [timeDiff, setTimeDiff] = useState({ months: 0, years: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    if (t("about-me") === "About me") {
      setIsFrench(false);
    } else {
      setIsFrench(true);
    }
  }, [t]);

  useEffect(() => {
    const currentDate = new Date();
    const userDate = new Date(data.user.date);

    const timeDiffMs = currentDate.getTime() - userDate.getTime();
    let monthDiff = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24 * 30.44));
    const yearDiff = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24 * 365.25));

    monthDiff = monthDiff >= 12 ? monthDiff % 12 : monthDiff;

    setTimeDiff({ months: monthDiff, years: yearDiff });
  }, []);

  return (
    <section className={styles.presentation}>
      <h3>{t("about-me")}</h3>
      <p>
        {t("presentation-part-1")}
        {data.user.firstname}
        {t("presentation-part-2")}
        <span className={styles.bold}>
          {isFrench ? data.user.fr.job : data.user.en.job}
        </span>
        {t("presentation-part-3")}
        <span className={styles.bold}>
          {timeDiff.years > 1 && (
            <>
              {timeDiff.years}
              {t("presentation-part-4")}
            </>
          )}
          {timeDiff.years === 1 && (
            <>
              {timeDiff.years}
              {t("presentation-part-4.1")}
            </>
          )}
          {timeDiff.years !== 0 && timeDiff.months > 0 && (
            <>{t("presentation-part-5")}</>
          )}
          {timeDiff.months === 1 && (
            <>
              {timeDiff.months}
              {t("presentation-part-6.1")}
            </>
          )}
          {timeDiff.months > 1 && timeDiff.months !== 0 && (
            <>
              {timeDiff.months}
              {t("presentation-part-6")}
            </>
          )}
          .
        </span>
      </p>
    </section>
  );
}
