import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='mt-2 md:mt-4 py-2 text-center text-emerald-300 text-sm sm:text-base md:text-lg lg:text-xl'>
      <a
        href='https://github.com/BatetDev/top-project-memory-card'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 hover:text-emerald-200 transition-colors'
      >
        <FaGithub className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8' />
        <span>BatetDev</span>
      </a>
    </footer>
  );
}
