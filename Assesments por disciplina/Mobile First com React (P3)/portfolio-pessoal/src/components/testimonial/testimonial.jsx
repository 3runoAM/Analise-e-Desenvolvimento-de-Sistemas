import styles from './testimonial.module.css';

export default function Testimonial({testimonialData}) {
    return (
        <section className={`${styles.testimonial} flex-column flex-center`}>
            <h2>{testimonialData.title}</h2>

            <p className={`hoverEffect`}>{testimonialData.testimonial}</p>
        </section>
    );
}