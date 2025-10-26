import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
	const testimonials = [
		{
			id: 1,
			name: 'Budi Santoso',
			role: 'Pemilik Rumah',
			image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
			rating: 5,
			text: 'Proses pembelian rumah sangat mudah dan transparan. Tim Isykariman sangat membantu dari awal hingga serah terima. Sangat puas dengan pelayanannya!',
		},
		{
			id: 2,
			name: 'Siti Nurhaliza',
			role: 'Investor Properti',
			image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
			rating: 5,
			text: 'Investasi tanah kavling di Isykariman adalah keputusan terbaik. Lokasinya strategis dan harganya sangat kompetitif. ROI nya luar biasa!',
		},
		{
			id: 3,
			name: 'Ahmad Wijaya',
			role: 'Pengusaha',
			image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
			rating: 5,
			text: 'Ruko yang saya beli dari Isykariman sangat cocok untuk bisnis saya. Lokasi ramai, akses mudah, dan harga terjangkau. Highly recommended!',
		},
		{
			id: 4,
			name: 'Dewi Lestari',
			role: 'Keluarga',
			image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dewi',
			rating: 5,
			text: 'Pelayanan profesional dan ramah. Semua dokumen legal lengkap dan proses KPR dibantu hingga selesai. Terima kasih Isykariman!',
		},
		{
			id: 5,
			name: 'Rudi Hermawan',
			role: 'Pemilik Usaha',
			image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rudi',
			rating: 5,
			text: 'Properti berkualitas dengan harga yang sangat reasonable. Tim marketing sangat responsif dan membantu menjawab semua pertanyaan saya.',
		},
		{
			id: 6,
			name: 'Linda Kusuma',
			role: 'Ibu Rumah Tangga',
			image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linda',
			rating: 5,
			text: 'Rumah impian kami akhirnya terwujud berkat Isykariman. Cicilan yang fleksibel membuat kami tidak terbebani. Lingkungannya juga sangat nyaman.',
		},
	];

	return (
		<section
			id='testimonials'
			className='py-20 lg:py-28 bg-slate-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>Apa Kata Klien Kami?</h2>
					<p className='text-lg text-slate-600'>Kepuasan pelanggan adalah prioritas utama kami. Simak pengalaman mereka bersama Isykariman</p>
				</div>

				{/* Testimonials Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial) => (
						<Card
							key={testimonial.id}
							className='group hover:shadow-xl transition-all duration-300 border-0 bg-white relative overflow-hidden'>
							<CardContent className='p-8'>
								{/* Quote Icon */}
								<div className='absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity'>
									<Quote className='w-16 h-16 text-emerald-600' />
								</div>

								{/* Rating */}
								<div className='flex items-center mb-4'>
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star
											key={i}
											className='w-5 h-5 fill-amber-400 text-amber-400'
										/>
									))}
								</div>

								{/* Testimonial Text */}
								<p className='text-slate-700 leading-relaxed mb-6 relative z-10'>"{testimonial.text}"</p>

								{/* Author Info */}
								<div className='flex items-center relative z-10'>
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className='w-12 h-12 rounded-full mr-4 bg-slate-100'
									/>
									<div>
										<p className='font-bold text-slate-900'>{testimonial.name}</p>
										<p className='text-sm text-slate-600'>{testimonial.role}</p>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
