import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { Container } from "../../components/Container/Container.jsx";

function ProfilePreviewPage() {
  return (
    <>
      <Header />
      <Main>
        <Container className={"main__container"}>
          <div className="profile-preview">
            <div className="profile-bio">
              <p className="profile-bio__key profile-text">name:</p>
              <p className="profile-bio__value">Yoimiya Naganohara</p>
              <p className="profile-bio__key profile-text">age:</p>
              <p className="profile-bio__value">26</p>
              <p className="profile-bio__key profile-text">interests:</p>
              <p className="profile-bio__value">Fireworks</p>
              <div className="profile-bio__img-container">
                <img
                  src="../../images/preview-avatar.png"
                  alt="Your profile image"
                  className="profile-bio__img"
                />
              </div>
            </div>
            <div className="profile-info">
              <h2 className="profile-info__heading profile-heading">
                Personal Information:
              </h2>
              <p className="profile-info__text profile-text">
                My job is to create fireworks and making people’s life happier.
                Fireworks are for now, but friends are forever!
              </p>
            </div>
            <div className="profile-tabs">
              <div className="profile-tabs__btns tabs-btns">
                <button
                  className="tabs-btns__link btn tabs-btns__link--active"
                  data-label="tabs-gallery"
                >
                  Gallery
                </button>
                <button className="tabs-btns__link btn" data-label="tabs-posts">
                  Posts
                </button>
                <button
                  className="tabs-btns__link btn"
                  data-label="tabs-comments"
                >
                  Comments
                </button>
                <button
                  className="tabs-btns__link btn"
                  data-label="tabs-contacts"
                >
                  Contacts
                </button>
              </div>
              <div className="profile-tabs__content tabs-gallery active-tab">
                <img
                  src="../../images/tabs-gallery__img-1.jpg"
                  alt="Gallery image"
                  className="tabs-gallery__img"
                />
                <img
                  src="../../images/tabs-gallery__img-2.jpg"
                  alt="Gallery image"
                  className="tabs-gallery__img"
                />
                <img
                  src="../../images/tabs-gallery__img-3.jpg"
                  alt="Gallery image"
                  className="tabs-gallery__img"
                />
                <img
                  src="../../images/tabs-gallery__img-4.jpg"
                  alt="Gallery image"
                  className="tabs-gallery__img"
                />
              </div>
              <div className="profile-tabs__content tabs-posts inactive-tab">
                <h3 className="tabs-posts__heading profile-heading">
                  Today’s exercises
                </h3>
                <p className="tabs-posts__text profile-text">
                  I usualy do my training with arrow every evening after work.
                  But today...
                </p>
              </div>
              <div className="profile-tabs__content tabs-comments inactive-tab">
                <h3 className="tabs-comments__post-heading profile-heading">
                  Today’s exercises
                </h3>
                <p className="tabs-comments__text profile-text">
                  I would love to!
                </p>
              </div>
              <div className="profile-tabs__content tabs-contacts inactive-tab">
                <a
                  href="#"
                  className="tabs-contacts__link tabs-contacts__link--instagram"
                ></a>
                <a
                  href="#"
                  className="tabs-contacts__link tabs-contacts__link--twitter"
                ></a>
                <a
                  href="#"
                  className="tabs-contacts__link tabs-contacts__link--facebook"
                ></a>
              </div>
            </div>
          </div>
          <div className="profile__btns-container">
            <a
              className="profile__btn btn main__btn--main-accent-style"
              href="/your-profile-react/create-profile"
            >
              Create your profile
            </a>
            <button className="profile__like-btn like-btn btn">
              <img
                className="like-btn__img"
                src="../../images/like-icon.svg"
                alt="Like It"
              />
              <span className="like-btn__text">Like it</span>
            </button>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  );
}
export { ProfilePreviewPage };
