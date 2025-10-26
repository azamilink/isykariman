import { Shield, FileCheck, CreditCard, Headphones, TrendingUp, MapPin } from 'lucide-react';

export const Features = () => {
	const features = [
		{
			icon: Shield,
			title: 'Legal & Terpercaya',
			description: 'Semua properti memiliki dokumen legal lengkap dan tersertifikasi resmi',
		},
		{
			icon: FileCheck,
			title: 'Sertifikat Jelas',
			description: 'Proses pengurusan sertifikat cepat dengan pendampingan penuh',
		},
		{
			icon: CreditCard,
			title: 'Pembayaran Fleksibel',
			description: 'Pilihan pembayaran cash, KPR, atau cicilan dengan bunga kompetitif',
		},
		{
			icon: Headphones,
			title: 'Konsultasi Gratis',
			description: 'Tim profesional siap membantu Anda menemukan properti yang tepat',
		},
		{
			icon: TrendingUp,
			title: 'Investasi Menguntungkan',
			description: 'Lokasi strategis dengan potensi nilai apresiasi tinggi',
		},
		{
			icon: MapPin,
			title: 'Lokasi Strategis',
			description: 'Dekat dengan pusat kota, sekolah, rumah sakit, dan fasilitas umum',
		},
	];

	return (
		<section
			id='features'
			className='py-20 lg:py-28 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>Mengapa Memilih Isykariman?</h2>
					<p className='text-lg text-slate-600'>Komitmen kami adalah memberikan pelayanan terbaik dan properti berkualitas untuk Anda</p>
				</div>

				{/* Features Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{features.map((feature, index) => {
						const IconComponent = feature.icon;
						return (
							<div
								key={index}
								className='group p-8 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer'>
								<div className='w-14 h-14 bg-emerald-100 group-hover:bg-emerald-600 rounded-xl flex items-center justify-center mb-5 transition-colors'>
									<IconComponent className='w-7 h-7 text-emerald-600 group-hover:text-white transition-colors' />
								</div>
								<h3 className='text-xl font-bold text-slate-900 mb-3'>{feature.title}</h3>
								<p className='text-slate-600 leading-relaxed'>{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Features;
