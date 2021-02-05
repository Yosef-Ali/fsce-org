import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<div className='grid h-10 max-w-screen-xl mx-auto font-bold bg-gray-100 place-content-center'>
				<span className='px-1 text-center'>
					max-w-screen-xl = 1280px = max-width:80rem
				</span>
			</div>
			<div className='grid h-10 max-w-screen-lg mx-auto mt-1 font-bold bg-gray-100 place-content-center'>
				<span className='px-1 text-center'>
					max-w-screen-lg = 1024px = max-width:64rem
				</span>
			</div>
			<div className='grid h-10 max-w-screen-md mx-auto mt-1 font-bold bg-gray-100 place-content-center'>
				<span className='px-1 text-center'>
					max-w-screen-md = max-w-3xl= 768px = max-width:48rem
				</span>
				<span className='px-1 text-center' />
			</div>
			<div className='grid h-10 max-w-sm mx-auto mt-1 font-bold bg-gray-100 place-content-center'>
				<span className='px-1 text-center'>
					max-w-sm = 375px = max-width:24rem
				</span>
				<span className='px-1 text-center' />
			</div>
			<div className='container max-w-screen-md mx-auto'>
				<Head>
					<title>Create Next App</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<main className='flex flex-col content-center justify-center py-24'>
					<h1 className='m-0 text-6xl leading-relaxed text-center no-underline'>
						Welcome to{' '}
						<a href='https://nextjs.org' className='text-gray-500'>
							Next.js!
						</a>
					</h1>

					<p className='text-2xl leading-6 text-center'>
						Get started by editing{' '}
						<code className='p-3 text-center bg-gray-200 rounded-md'>
							pages/index.js
						</code>
					</p>

					<div className='flex flex-wrap max-w-3xl mt-12'>
						<a
							href='https://nextjs.org/docs'
							className='w-5/12 p-5 m-4 text-left transition-colors border rounded-lg hover:border-blue-500 group'
						>
							<h3 className='mb-4 text-2xl leading-normal group-hover:text-blue-500'>
								Documentation &rarr;
							</h3>
							<p className='m-0 text-xl leading-normal group-hover:text-blue-500'>
								Find in-depth information about Next.js features and API.
							</p>
						</a>

						<a
							href='https://nextjs.org/learn'
							className='w-5/12 p-5 m-4 text-left transition-colors border rounded-lg hover:border-blue-500 group'
						>
							<h3 className='mb-4 text-2xl leading-normal group-hover:text-blue-500'>
								Learn &rarr;
							</h3>
							<p className='m-0 text-xl leading-normal group-hover:text-blue-500'>
								Learn about Next.js in an interactive course with quizzes!
							</p>
						</a>

						<a
							href='https://github.com/vercel/next.js/tree/master/examples'
							className='w-5/12 p-5 m-4 text-left transition-colors border rounded-lg hover:border-blue-500 group'
						>
							<h3 className='mb-4 text-2xl leading-normal group-hover:text-blue-500'>
								Examples &rarr;
							</h3>
							<p className='m-0 text-xl leading-normal group-hover:text-blue-500'>
								Discover and deploy boilerplate example Next.js projects.
							</p>
						</a>

						<a
							href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
							className='w-5/12 p-5 m-4 text-left transition-colors border rounded-lg hover:border-blue-500 group'
						>
							<h3 className='mb-4 text-2xl leading-normal group-hover:text-blue-500'>
								Deploy &rarr;
							</h3>
							<p className='m-0 text-xl leading-normal group-hover:text-blue-500'>
								Instantly deploy your Next.js site to a public URL with Vercel.
							</p>
						</a>
					</div>
				</main>

				<footer className={styles.footer}>
					<a
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Powered by{' '}
						<img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
					</a>
				</footer>
			</div>
		</div>
	);
}
