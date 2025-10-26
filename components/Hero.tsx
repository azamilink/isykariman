'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Award, Users } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => {
	const scrollToContact = () => {
		const element = document.getElementById('contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const scrollToProperties = () => {
		const element = document.getElementById('properties');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center pt-20 overflow-hidden'>
			{/* Background with overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src='https://images.unsplash.com/photo-1758193431355-54df41421657?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc2MTQwMjM1N3ww&ixlib=rb-4.1.0&q=85'
					alt='Property Development'
					className='w-full h-full object-cover'
					fill
				/>
				<div className='absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70'></div>
			</div>

			{/* Content */}
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='max-w-3xl'>
					<div className='inline-flex items-center space-x-2 bg-emerald-600/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6 backdrop-blur-sm'>
						<Award className='w-4 h-4 text-emerald-400' />
						<span className='text-sm text-emerald-300 font-medium'>Developer Properti Terpercaya</span>
					</div>

					<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
						Investasi Properti Cerdas Untuk
						<span className='block text-emerald-400 mt-2'>Masa Depan Cerah</span>
					</h1>

					<p className='text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed'>Temukan properti impian Anda bersama Isykariman. Kami menyediakan rumah, ruko, tanah, dan lahan pemakaman dengan lokasi strategis dan harga terjangkau. </p>

					<div className='flex flex-col sm:flex-row gap-4 mb-12'>
						<Button
							onClick={scrollToContact}
							size='lg'
							className='bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all'>
							Konsultasi Gratis
							<ArrowRight className='ml-2 w-5 h-5' />
						</Button>
						<Button
							onClick={scrollToProperties}
							size='lg'
							variant='outline'
							className='border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6 transition-all'>
							Lihat Properti
						</Button>
					</div>

					{/* Stats */}
					<div className='grid grid-cols-3 gap-6 max-w-2xl'>
						<div className='text-center sm:text-left'>
							<div className='flex items-center justify-center sm:justify-start mb-2'>
								<MapPin className='w-5 h-5 text-emerald-400 mr-2' />
								<p className='text-3xl font-bold text-white'>50+</p>
							</div>
							<p className='text-sm text-slate-400'>Lokasi Strategis</p>
						</div>
						<div className='text-center sm:text-left'>
							<div className='flex items-center justify-center sm:justify-start mb-2'>
								<Users className='w-5 h-5 text-emerald-400 mr-2' />
								<p className='text-3xl font-bold text-white'>1000+</p>
							</div>
							<p className='text-sm text-slate-400'>Klien Puas</p>
						</div>
						<div className='text-center sm:text-left'>
							<div className='flex items-center justify-center sm:justify-start mb-2'>
								<Award className='w-5 h-5 text-emerald-400 mr-2' />
								<p className='text-3xl font-bold text-white'>15+</p>
							</div>
							<p className='text-sm text-slate-400'>Tahun Pengalaman</p>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10'>
				<div className='animate-bounce'>
					<div className='w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2'>
						<div className='w-1.5 h-3 bg-white/70 rounded-full'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
