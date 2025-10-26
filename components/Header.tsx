'use client';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	return (
		<header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center py-4'>
					{/* Logo */}
					<div className='flex items-center'>
						<h1 className='text-2xl sm:text-3xl font-bold text-slate-900'>
							<span className='text-emerald-600'>ISYKARIMAN</span>
						</h1>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						<button
							onClick={() => scrollToSection('hero')}
							className='text-slate-700 hover:text-emerald-600 transition-colors font-medium'>
							Beranda
						</button>
						<button
							onClick={() => scrollToSection('properties')}
							className='text-slate-700 hover:text-emerald-600 transition-colors font-medium'>
							Properti
						</button>
						<button
							onClick={() => scrollToSection('features')}
							className='text-slate-700 hover:text-emerald-600 transition-colors font-medium'>
							Keunggulan
						</button>
						<button
							onClick={() => scrollToSection('testimonials')}
							className='text-slate-700 hover:text-emerald-600 transition-colors font-medium'>
							Testimoni
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className='text-slate-700 hover:text-emerald-600 transition-colors font-medium'>
							Kontak
						</button>
					</nav>

					{/* Contact Info & CTA */}
					<div className='hidden lg:flex items-center space-x-4'>
						<div className='flex items-center space-x-2 text-sm text-slate-600'>
							<Phone className='w-4 h-4' />
							<span>+62 878-5523-1283</span>
						</div>
						<Button
							onClick={() => scrollToSection('contact')}
							className='bg-emerald-600 hover:bg-emerald-700 text-white'>
							Hubungi Kami
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden p-2 text-slate-700'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className='md:hidden py-4 border-t border-slate-200'>
						<nav className='flex flex-col space-y-4'>
							<button
								onClick={() => scrollToSection('hero')}
								className='text-slate-700 hover:text-emerald-600 transition-colors font-medium text-left'>
								Beranda
							</button>
							<button
								onClick={() => scrollToSection('properties')}
								className='text-slate-700 hover:text-emerald-600 transition-colors font-medium text-left'>
								Properti
							</button>
							<button
								onClick={() => scrollToSection('features')}
								className='text-slate-700 hover:text-emerald-600 transition-colors font-medium text-left'>
								Keunggulan
							</button>
							<button
								onClick={() => scrollToSection('testimonials')}
								className='text-slate-700 hover:text-emerald-600 transition-colors font-medium text-left'>
								Testimoni
							</button>
							<button
								onClick={() => scrollToSection('contact')}
								className='text-slate-700 hover:text-emerald-600 transition-colors font-medium text-left'>
								Kontak
							</button>
							<div className='flex items-center space-x-2 text-sm text-slate-600 pt-2'>
								<Phone className='w-4 h-4' />
								<span>+62 878-5523-1283</span>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
