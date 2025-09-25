import styles from './profileCard.module.css';

export default function ProfileCard({profileData}) {
    return (
        <section className={`${styles.profileCard} flex-row flex-center mediumGap mediumPadding hoverEffect`}>

            <img src={profileData.imgUrl} alt="User Profile"/>

            <div className={`${styles.infoContainer} flex-column smallGap`}>
                <p>{profileData.name}</p>
                <p>{profileData.bio}</p>
            </div>

        </section>
    );
}