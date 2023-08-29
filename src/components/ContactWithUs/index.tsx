import style from "./ContactWithUs.module.scss";

const ContactWithUs = () => {
  return (
    <section className={style.contact} id="contact">
      <h2 className={style.contact__title}>Orçamento</h2>
      <p className={style.contact__text}>
        Interessado em entrar em contanto com um dos nossos profissionais?
      </p>
      <button className={style.contact__button}>Entre em contato</button>
    </section>
  );
};

export default ContactWithUs;
