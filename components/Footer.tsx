'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-slate-900 text-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					{/* Company Info */}
					<div>
						<h3 className='text-2xl font-bold text-emerald-400 mb-4'>ISYKARIMAN</h3>
						<p className='text-slate-400 mb-4 leading-relaxed'>Developer properti terpercaya dengan pengalaman lebih dari 15 tahun melayani ribuan klien di seluruh Indonesia.</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors'>
								<Facebook className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors'>
								<Instagram className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='w-10 h-10 bg-slate-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-colors'>
								<Twitter className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-lg font-bold mb-4'>Menu Cepat</h4>
						<ul className='space-y-2'>
							<li>
								<a
									href='#hero'
									className='text-slate-400 hover:text-emerald-400 transition-colors'>
									Beranda
								</a>
							</li>
							<li>
								<a
									href='#properties'
									className='text-slate-400 hover:text-emerald-400 transition-colors'>
									Properti
								</a>
							</li>
							<li>
								<a
									href='#features'
									className='text-slate-400 hover:text-emerald-400 transition-colors'>
									Keunggulan
								</a>
							</li>
							<li>
								<a
									href='#testimonials'
									className='text-slate-400 hover:text-emerald-400 transition-colors'>
									Testimoni
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='text-slate-400 hover:text-emerald-400 transition-colors'>
									Kontak
								</a>
							</li>
						</ul>
					</div>

					{/* Property Types */}
					<div>
						<h4 className='text-lg font-bold mb-4'>Jenis Properti</h4>
						<ul className='space-y-2'>
							<li className='text-slate-400'>Rumah Tinggal</li>
							<li className='text-slate-400'>Ruko Komersial</li>
							<li className='text-slate-400'>Tanah Kavling</li>
							<li className='text-slate-400'>Pemakaman Umum</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className='text-lg font-bold mb-4'>Kontak Kami</h4>
						<ul className='space-y-3'>
							<li className='flex items-start'>
								<MapPin className='w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0' />
								<span className='text-slate-400'>Jl. Damai Raya No. 5, Jakarta Selatan, 12270</span>
							</li>
							<li className='flex items-center'>
								<Phone className='w-5 h-5 text-emerald-400 mr-3 flex-shrink-0' />
								<span className='text-slate-400'>+62 878-5523-1283</span>
							</li>
							<li className='flex items-center'>
								<Mail className='w-5 h-5 text-emerald-400 mr-3 flex-shrink-0' />
								<span className='text-slate-400'>azamiwandi@gmail.com</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-slate-800 pt-8 mt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<p className='text-slate-400 text-sm mb-4 md:mb-0'>© {currentYear} Isykariman. All rights reserved.</p>
						<div className='flex space-x-6 text-sm'>
							<a
								href='#'
								className='text-slate-400 hover:text-emerald-400 transition-colors'>
								Kebijakan Privasi
							</a>
							<a
								href='#'
								className='text-slate-400 hover:text-emerald-400 transition-colors'>
								Syarat & Ketentuan
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
