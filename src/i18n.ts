import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: false,
		lng: 'en',
		resources: {
			en: {
				translation: {
					navbar_1: 'info',
					navbar_2: 'portfolio',
					navbar_3: 'contact',

					ticker: 'portfolio website',

					homeCustomHeading_1: "Hi! I'm Andrew",
					homeCustomHeading_2: 'Portfolio',

					homeSmallInfoTitle_1: 'Who am I?',
					homeSmallInfoTitle_2: 'What can I do?',

					homeSmallInfoText_1:
						"I'm frontend developer. I like programming and pizza)",
					homeSmallInfoText_2:
						'I can code ultra-super-cool single page application',

					homeClick: 'click',
					homeLink: 'See more',

					contactCustomHeading: "Send me a message. I'll check it.",

					contactLabel_1: "What's your name?",
					contactLabel_2: "What's your email?",
					contactLabel_3: "What's the name of your organization?",
					contactLabel_4: 'Your message',

					contactPlaceholder_1: 'John Doe',
					contactPlaceholder_2: 'john@doe.com',
					contactPlaceholder_3: 'John & Doe',
					contactPlaceholder_4: 'Hello Andrew...',

					contactButton: 'Send',

					infoCustomHeading_1: 'About me',
					infoCustomHeading_2: "Whats'up!",
					infoCustomHeading_3: 'My stack:',
					infoCustomHeading_4: 'Learning:',

					infoTypewriterWords_1: 'a frontend developer.',
					infoTypewriterWords_2: 'a bit of a designer.',
					infoTypewriterWords_3: 'just a nice guy.',

					infoLearning:
						"Now I spend a lot of time on Next.js, but I also don't forget about Vue.js",

					portfolioCustomHeading: 'My beautiful portfolio',

					I: "I'm",
					name: 'Andrew',
					myNameIs: 'My name is',
					age: "I'm 20 years old",
					designedBy: 'Designed by',
					fullName: 'Andrew Romanov',

					footerHeading_1: 'version',
					footerHeading_2: 'socials',
				},
			},
			ru: {
				translation: {
					navbar_1: 'инфо',
					navbar_2: 'портфолио',
					navbar_3: 'связь',

					ticker: 'сайт портфолио',

					homeCustomHeading_1: 'Привет! Меня зовут Андрей',
					homeCustomHeading_2: 'Портфолио',

					homeSmallInfoTitle_1: 'Кто я?',
					homeSmallInfoTitle_2: 'Что могу?',

					homeSmallInfoText_1:
						'Я фронтенд разработчик. Люблю писать код и пиццу)',
					homeSmallInfoText_2:
						'Могу написать ультра-супер-крутое одностраничное приложение',

					homeClick: 'клик',
					homeLink: 'Больше',

					contactCustomHeading: 'Отправь мне сообщение. Почитаю.',

					contactLabel_1: 'Как Вас зовут?',
					contactLabel_2: 'Какой у Вас email?',
					contactLabel_3: 'Как называется Ваша организация?',
					contactLabel_4: 'Ваше сообщение',

					contactPlaceholder_1: 'Иванов Иван',
					contactPlaceholder_2: 'ivanov@ivan.ru',
					contactPlaceholder_3: 'Иванов & Иван',
					contactPlaceholder_4: 'Привет Андрей...',

					contactButton: 'Отправить',

					infoCustomHeading_1: 'Обо мне',
					infoCustomHeading_2: 'Привет!',
					infoCustomHeading_3: 'Мой стак:',
					infoCustomHeading_4: 'Изучаю:',

					infoTypewriterWords_1: 'фронтенд разработчик.',
					infoTypewriterWords_2: 'немного дизайнер.',
					infoTypewriterWords_3: 'красавчик.',

					infoLearning:
						'Много времени трачу на изучению Next.js, но и про Vue.js не забываю',

					portfolioCustomHeading: 'Мое прекрасное портфолио',

					footerHeading_1: 'версия',
					footerHeading_2: 'соц сети',

					I: 'Я',
					name: 'Андрей',
					age: 'Мне 20 лет',
					myNameIs: 'Меня зовут',
					designedBy: 'Разработано',
					fullName: 'Андреем Романовым',
				},
			},
		},
	});