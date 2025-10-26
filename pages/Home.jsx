import Hero from '@/components/Hero';
import PropertyTypes from '@/components/PropertyTypes';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Home = () => {
	return (
		<div className='min-h-screen'>
			<Hero />
			<PropertyTypes />
			<Features />
			<Testimonials />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
