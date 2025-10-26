'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
// import { toast } from 'sonner';
// import axios from 'axios';

// const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const ContactForm = () => {
	// const [formData, setFormData] = useState({
	// 	name: '',
	// 	email: '',
	// 	phone: '',
	// 	propertyType: '',
	// 	message: '',
	// });

	// const [isSubmitting, setIsSubmitting] = useState(false);

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData((prev) => ({
	// 		...prev,
	// 		[name]: value,
	// 	}));
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	setIsSubmitting(true);

	// 	try {
	// 		const response = await axios.post(`${BACKEND_URL}/api/contact`, {
	// 			name: formData.name,
	// 			email: formData.email,
	// 			phone: formData.phone,
	// 			property_type: formData.propertyType,
	// 			message: formData.message,
	// 		});

	// 		if (response.data.success) {
	// 			toast.success(response.data.message);
	// 			setFormData({
	// 				name: '',
	// 				email: '',
	// 				phone: '',
	// 				propertyType: '',
	// 				message: '',
	// 			});
	// 		}
	// 	} catch (error) {
	// 		const errorMessage = error.response?.data?.detail || 'Terjadi kesalahan. Silakan coba lagi.';
	// 		toast.error(errorMessage);
	// 		console.error('Contact form error:', error);
	// 	} finally {
	// 		setIsSubmitting(false);
	// 	}
	// };

	return (
		<section
			id='contact'
			className='py-20 lg:py-28 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>Hubungi Kami Sekarang</h2>
					<p className='text-lg text-slate-600'>Siap membantu Anda menemukan properti impian. Konsultasi gratis tanpa komitmen!</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{/* Contact Info Cards */}
					<div className='lg:col-span-1 space-y-6'>
						<Card className='border-2 border-slate-200 hover:border-emerald-500 transition-colors'>
							<CardContent className='p-6'>
								<div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4'>
									<Phone className='w-6 h-6 text-emerald-600' />
								</div>
								<h3 className='font-bold text-slate-900 mb-2'>Telepon</h3>
								<p className='text-slate-600'>+62 878-5523-1283</p>
							</CardContent>
						</Card>

						<Card className='border-2 border-slate-200 hover:border-emerald-500 transition-colors'>
							<CardContent className='p-6'>
								<div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4'>
									<Mail className='w-6 h-6 text-emerald-600' />
								</div>
								<h3 className='font-bold text-slate-900 mb-2'>Email</h3>
								<p className='text-slate-600'>azamiwandi@gmail.com</p>
							</CardContent>
						</Card>

						<Card className='border-2 border-slate-200 hover:border-emerald-500 transition-colors'>
							<CardContent className='p-6'>
								<div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4'>
									<MapPin className='w-6 h-6 text-emerald-600' />
								</div>
								<h3 className='font-bold text-slate-900 mb-2'>Alamat Kantor</h3>
								<p className='text-slate-600'>Jl. Damai Raya No. 5, Jakarta Selatan, 12270</p>
							</CardContent>
						</Card>
					</div>

					{/* Contact Form */}
					<div className='lg:col-span-2'>
						<Card className='border-2 border-slate-200'>
							<CardContent className='p-8'>
								<form className='space-y-6'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
										<div>
											<label className='block text-sm font-medium text-slate-900 mb-2'>Nama Lengkap *</label>
											<Input
												type='text'
												name='name'
												placeholder='Masukkan nama Anda'
												required
												className='w-full'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium text-slate-900 mb-2'>Email *</label>
											<Input
												type='email'
												name='email'
												placeholder='email@contoh.com'
												required
												className='w-full'
											/>
										</div>
									</div>

									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
										<div>
											<label className='block text-sm font-medium text-slate-900 mb-2'>Nomor Telepon *</label>
											<Input
												type='tel'
												name='phone'
												placeholder='08123456789'
												required
												className='w-full'
											/>
										</div>
										<div>
											<label className='block text-sm font-medium text-slate-900 mb-2'>Jenis Properti *</label>
											<select
												name='propertyType'
												required
												className='w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500'>
												<option value=''>Pilih jenis properti</option>
												<option value='rumah'>Rumah Tinggal</option>
												<option value='ruko'>Ruko</option>
												<option value='tanah'>Tanah Kavling</option>
												<option value='pemakaman'>Pemakaman Umum</option>
											</select>
										</div>
									</div>

									<div>
										<label className='block text-sm font-medium text-slate-900 mb-2'>Pesan *</label>
										<Textarea
											name='message'
											placeholder='Ceritakan kebutuhan properti Anda...'
											required
											rows={5}
											className='w-full'
										/>
									</div>

									<Button
										type='submit'
										// disabled={isSubmitting}
										className='w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg'>
										{/* {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'} */}
										Kirim Pesan
										<Send className='ml-2 w-5 h-5' />
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
