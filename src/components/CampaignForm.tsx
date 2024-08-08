import Image from "next/image";
import styles from "./form.module.css";
import Button from "./Button";

const CampaignForm = () => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.imgDiv}>
      
        <Image src={"/images/campaignBanner2.jpg"} alt="dr" width={400} height={100} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>
          Enter your jazz Number:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.formInput}
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Enter Opt:
        </label>
        <div className={styles.formInputContainer}>
          <input
            type="number"
            name="email1"
            className={styles.formInput}
          />
          <input
            type="number"
            name="email2"
            className={styles.formInput}
          />
          <input
            type="number"
            name="email3"
            className={styles.formInput}
          />
          <input
            type="number"
            name="email4"
            className={styles.formInput}
          />
        </div>
      </div>

      <div className={styles.buttonDiv}><Button/></div>
    </form>
  );
};

export default CampaignForm;
