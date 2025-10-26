// components/sections/property-types.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, MapPinned, TreePine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

// Definisi tipe untuk setiap properti
interface Property {
	id: number;
	title: string;
	description: string;
	icon: React.ElementType;
	image: string;
	features: string[];
	color: 'emerald' | 'blue' | 'amber' | 'slate';
}

// Fungsi utama
export const PropertyTypes: React.FC = () => {
	const properties: Property[] = [
		{
			id: 1,
			title: 'Rumah Tinggal',
			description: 'Hunian nyaman dengan desain modern dan lokasi strategis untuk keluarga Anda',
			icon: Home,
			image: 'https://images.unsplash.com/photo-1761158494764-bbf2a2e2a70d?crop=entropy&cs=srgb&fm=jpg&q=85',
			features: ['Lingkungan Aman', 'Akses Mudah', 'Fasilitas Lengkap'],
			color: 'emerald',
		},
		{
			id: 2,
			title: 'Ruko',
			description: 'Properti komersial ideal untuk usaha dengan traffic tinggi dan ROI maksimal',
			icon: Building2,
			image: 'https://images.unsplash.com/photo-1754945820331-074d573ddda6?crop=entropy&cs=srgb&fm=jpg&q=85',
			features: ['Lokasi Komersial', 'Parkir Luas', 'Investasi Menguntungkan'],
			color: 'blue',
		},
		{
			id: 3,
			title: 'Tanah Kavling',
			description: 'Investasi tanah dengan nilai apresiasi tinggi dan sertifikat legal lengkap',
			icon: MapPinned,
			image: 'https://images.unsplash.com/photo-1685266326473-5b99c3d08a7e?crop=entropy&cs=srgb&fm=jpg&q=85',
			features: ['Sertifikat SHM', 'Cicilan Fleksibel', 'ROI Tinggi'],
			color: 'amber',
		},
		{
			id: 4,
			title: 'Pemakaman Umum',
			description: 'Lahan pemakaman dengan suasana tenang, perawatan terjaga, dan akses mudah',
			icon: TreePine,
			image: 'https://images.unsplash.com/photo-1605696756938-fcad64c2f48f?crop=entropy&cs=srgb&fm=jpg&q=85',
			features: ['Terawat Baik', 'Lokasi Tenang', 'Harga Terjangkau'],
			color: 'slate',
		},
	];

	const getColorClasses = (color: Property['color']) => {
		const colors: Record<Property['color'], string> = {
			emerald: 'bg-emerald-600 group-hover:bg-emerald-700',
			blue: 'bg-blue-600 group-hover:bg-blue-700',
			amber: 'bg-amber-600 group-hover:bg-amber-700',
			slate: 'bg-slate-600 group-hover:bg-slate-700',
		};
		return colors[color];
	};

	return (
		<section
			id='properties'
			className='py-20 lg:py-28 bg-slate-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>Jenis Properti Yang Kami Tawarkan</h2>
					<p className='text-lg text-slate-600'>Pilihan properti beragam untuk memenuhi kebutuhan investasi dan hunian Anda</p>
				</div>

				{/* Property Cards Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{properties.map((property) => {
						const IconComponent = property.icon;
						return (
							<Card
								key={property.id}
								className='group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer transform hover:-translate-y-2'>
								<div className='relative h-56 overflow-hidden'>
									<Image
										fill
										src={property.image}
										alt={property.title}
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
									/>
									<div className='absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent' />
									<div className={`absolute top-4 right-4 ${getColorClasses(property.color)} p-3 rounded-xl shadow-lg transition-colors`}>
										<IconComponent className='w-6 h-6 text-white' />
									</div>
								</div>
								<CardContent className='p-6'>
									<h3 className='text-xl font-bold text-slate-900 mb-3'>{property.title}</h3>
									<p className='text-slate-600 mb-4 leading-relaxed'>{property.description}</p>
									<ul className='space-y-2 mb-6'>
										{property.features.map((feature, idx) => (
											<li
												key={idx}
												className='flex items-center text-sm text-slate-700'>
												<div className='w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2'></div>
												{feature}
											</li>
										))}
									</ul>
									<Button
										variant='ghost'
										className='w-full group-hover:bg-emerald-600 group-hover:text-white transition-colors'>
										Lihat Detail
										<ArrowRight className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1' />
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default PropertyTypes;
