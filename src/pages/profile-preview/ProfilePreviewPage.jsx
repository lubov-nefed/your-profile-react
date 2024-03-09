import { Header } from "../../components/Header/Header.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

function ProfilePreviewPage() {
  return (
    <>
      <Header />
      <main class="main">
            <div class="main__container container">
                <div class="profile-preview">
                    <div class="profile-bio">
                        <p class="profile-bio__key profile-text">name:</p>
                        <p class="profile-bio__value">Yoimiya Naganohara</p>
                        <p class="profile-bio__key profile-text">age:</p>
                        <p class="profile-bio__value">26</p>
                        <p class="profile-bio__key profile-text">interests:</p>
                        <p class="profile-bio__value">Fireworks</p>
                        <div class="profile-bio__img-container"><img src="../../images/preview-avatar.png" alt="Your profile image"
                                class="profile-bio__img"/></div>
                    </div>
                    <div class="profile-info">
                        <h2 class="profile-info__heading profile-heading">Personal Information:</h2>
                        <p class="profile-info__text profile-text">My job is to create fireworks and making people’s life happier.
                            Fireworks are for now, but friends are forever!</p>
                    </div>
                    <div class="profile-tabs">
                        <div class="profile-tabs__btns tabs-btns">
                            <button class="tabs-btns__link btn tabs-btns__link--active" data-label="tabs-gallery">Gallery</button>
                            <button class="tabs-btns__link btn" data-label="tabs-posts">Posts</button>
                            <button class="tabs-btns__link btn" data-label="tabs-comments">Comments</button>
                            <button class="tabs-btns__link btn" data-label="tabs-contacts">Contacts</button>
                        </div>
                        <div class="profile-tabs__content tabs-gallery active-tab">
                            <img src="../../images/tabs-gallery__img-1.jpg" alt="Gallery image" class="tabs-gallery__img"/>
                            <img src="../../images/tabs-gallery__img-2.jpg" alt="Gallery image" class="tabs-gallery__img"/>
                            <img src="../../images/tabs-gallery__img-3.jpg" alt="Gallery image" class="tabs-gallery__img"/>
                            <img src="../../images/tabs-gallery__img-4.jpg" alt="Gallery image" class="tabs-gallery__img"/>
                        </div>
                        <div class="profile-tabs__content tabs-posts inactive-tab">
                            <h3 class="tabs-posts__heading profile-heading">Today’s exercises</h3>
                            <p class="tabs-posts__text profile-text">I usualy do my training with arrow every evening after work. But
                                today...</p>
                        </div>
                        <div class="profile-tabs__content tabs-comments inactive-tab">
                            <h3 class="tabs-comments__post-heading profile-heading">Today’s exercises</h3>
                            <p class="tabs-comments__text profile-text">I would love to!</p>
                        </div>
                        <div class="profile-tabs__content tabs-contacts inactive-tab">
                            <a href="#" class="tabs-contacts__link tabs-contacts__link--instagram"></a>
                            <a href="#" class="tabs-contacts__link tabs-contacts__link--twitter"></a>
                            <a href="#" class="tabs-contacts__link tabs-contacts__link--facebook"></a>
                        </div>
                    </div>
                
                </div>
                <div class="profile__btns-container">
                    <a class="profile__btn btn main__btn--main-accent-style" href="../create-account/create-account.html">Create your profile</a>
                    <button class="profile__like-btn like-btn btn">            
                        <img class="like-btn__img" src="../../images/like-icon.svg" alt="Like It"/>
                        <span class="like-btn__text">Like it</span>
                    </button>
                </div>

            </div>
        </main>
      <Footer />
    </>
  );
}
export { ProfilePreviewPage };
