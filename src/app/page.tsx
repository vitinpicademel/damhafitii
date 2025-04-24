'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImagensVideos from './components/ImagensVideos'
import StatusObra from './components/StatusObra'
import Localizacao from './components/Localizacao'

export default function Home() {
  const [activeTab, setActiveTab] = useState('fotos')
  const [scrollProgress, setScrollProgress] = useState(0)

  // Efeito de scroll com progresso
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY
      const maxScroll = 200 // Altura máxima para a transição completa
      const progress = Math.min(scrollHeight / maxScroll, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para calcular a cor do texto baseada no progresso do scroll
  const getBackgroundColor = () => {
    const opacity = Math.max(1 - scrollProgress, 0)
    return `rgba(27, 49, 89, ${opacity})`
  }

  const getTextColor = () => {
    return scrollProgress > 0.8 ? 'text-gray-800' : 'text-white'
  }

  return (
    <>
      {/* Menu de navegação */}
      <nav 
        className="fixed top-0 w-full transition-all duration-300 z-50" 
        style={{ 
          backgroundColor: getBackgroundColor(),
          backdropFilter: scrollProgress > 0 ? 'blur(8px)' : 'none',
          boxShadow: scrollProgress > 0.8 ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo ou Nome */}
            <div className="h-12">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo Damha Fit II"
                  width={180}
                  height={48}
                  className="object-contain h-12"
                  priority
                />
              </Link>
            </div>

            {/* Links de Navegação */}
            <div className="flex items-center space-x-4">
              <ul className="flex items-center gap-2">
                <li>
                  <Link href="#sobre" className={`relative group px-4 py-2 transition-colors duration-300 text-base font-medium ${getTextColor()}`}>
                    <span className="relative z-10">Sobre</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#diferenciais" className={`relative group px-4 py-2 transition-colors duration-300 text-base font-medium ${getTextColor()}`}>
                    <span className="relative z-10">Diferenciais</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#imagens" className={`relative group px-4 py-2 transition-colors duration-300 text-base font-medium ${getTextColor()}`}>
                    <span className="relative z-10">Imagens e Vídeos</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#status" className={`relative group px-4 py-2 transition-colors duration-300 text-base font-medium ${getTextColor()}`}>
                    <span className="relative z-10">Status da obra</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link href="#localizacao" className={`relative group px-4 py-2 transition-colors duration-300 text-base font-medium ${getTextColor()}`}>
                    <span className="relative z-10">Localização</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
              </ul>

              {/* Separador Vertical */}
              <div className={`h-8 w-px transition-colors duration-300 mx-4 ${scrollProgress > 0.8 ? 'bg-gray-300' : 'bg-white/20'}`}></div>

              {/* Botão CTA */}
              <Link 
                href="https://wa.me/553433339576?text=[DF1] Olá! Gostaria de mais informações sobre o Damha Fit II."
                target="_blank"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
              >
                <span>TENHO INTERESSE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section com Slider */}
      <section className="relative w-full h-[85vh] mt-8">
        {/* Área para a imagem principal */}
        <div className="absolute inset-0">
          {/* Aqui você vai adicionar sua imagem */}
          <div className="w-full h-full relative">
            {/* Placeholder para sua imagem */}
            <div className="absolute inset-0 bg-cover bg-center bg-[#1B3159]" />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        </div>

        {/* Ondas decorativas superiores */}
        <div className="absolute top-0 left-0 right-0 rotate-180">
          <div className="relative">
            <svg className="w-full h-24 fill-white/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-24 fill-white/20" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-24 fill-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Ondas decorativas inferiores */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="relative">
            <svg className="w-full h-24 fill-white/10" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-24 fill-white/20" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg className="absolute bottom-0 w-full h-24 fill-white" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        {/* Conteúdo do Hero */}
        <div className="absolute inset-0 flex items-center justify-start px-12 lg:px-24">
          <div className="text-white max-w-2xl">
            <span className="text-gold font-medium tracking-wider mb-4 block animate-fade-in-down">NOVO LANÇAMENTO</span>
            <h1 className="text-7xl font-display mb-6 animate-fade-in">DAMHA FIT II</h1>
            <div className="space-y-4 mb-8">
              <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-xl p-8 inline-block shadow-2xl animate-fade-in-up">
                <p className="text-2xl font-light">Entrada de <span className="font-semibold text-gold">R$ 9.000,00</span></p>
                <p className="text-2xl font-light">Parcelas de <span className="font-semibold text-gold">R$ 950,00</span></p>
              </div>
            </div>
            <div className="space-y-3 text-lg font-light animate-fade-in-up delay-200">
              <p className="flex items-center bg-white/5 backdrop-blur-sm rounded-full py-2 px-4">
                <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                Condomínio com estrutura alto padrão
              </p>
              <p className="flex items-center bg-white/5 backdrop-blur-sm rounded-full py-2 px-4">
                <span className="w-2 h-2 rounded-full bg-gold mr-3"></span>
                5 minutos do centro da cidade
              </p>
            </div>
            <div className="mt-8 flex space-x-4 animate-fade-in-up delay-300">
              <Link href="#sobre" className="bg-gold hover:bg-gold-dark text-white px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center">
                <span>Saiba mais</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="https://wa.me/553433339576?text=[DF1] Olá! Gostaria de mais informações sobre o Damha Fit II."
                target="_blank"
                className="border border-white/30 hover:border-gold/50 text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                Fale conosco
              </Link>
            </div>
          </div>
        </div>

        {/* Controles do Slider */}
        <div className="absolute bottom-32 right-12 lg:right-24 flex space-x-3 z-10">
          <button className="w-3 h-3 rounded-full bg-white/30 border border-white/50 transition-all duration-300 hover:bg-gold hover:border-gold"></button>
          <button className="w-3 h-3 rounded-full bg-gold border border-gold transition-all duration-300"></button>
          <button className="w-3 h-3 rounded-full bg-white/30 border border-white/50 transition-all duration-300 hover:bg-gold hover:border-gold"></button>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-[#FFFBF4] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Conteúdo */}
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <span className="text-gold uppercase tracking-wider font-medium mb-4 block">SOBRE</span>
                <h2 className="text-4xl lg:text-5xl font-display text-gray-800 mb-8 leading-tight">
                  A vida é melhor com a natureza ao redor.
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="leading-relaxed">
                    Viver em contato permanente com a natureza é transformador, faz bem para nossa saúde física e mental.
                  </p>
                  <p className="leading-relaxed">
                    Assim como o lazer, a atividade física e a prática de esportes são essenciais para se viver com mais qualidade.
                  </p>
                  <p className="leading-relaxed">
                    Por isso, o Damha Fit II, com uma área total de <span className="font-semibold">mais de 150 mil m²</span> de verde e uma área de lazer formidável, que inclui piscinas, quadras de tênis, espaço gourmet e até lagos para a pesca, é a escolha certa para quem procura uma vida mais saudável, harmoniosa e prazerosa.
                  </p>
                  <p className="leading-relaxed">
                    Próximo ao centro da cidade e com um sistema de segurança moderno, ele ainda proporciona todo conforto e tranquilidade que você e sua família merecem.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem com formato curvo */}
            <div className="lg:w-1/2 relative">
              <div className="aspect-[16/12] relative rounded-[100px] overflow-hidden shadow-2xl" style={{
                borderTopLeftRadius: '300px',
                borderBottomRightRadius: '300px'
              }}>
                <Image
                  src="/images/sobre-damha.jpg.jpeg"
                  alt="Vista aérea do Damha Fit II"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-[#C2B59B] relative overflow-hidden">
        <div className="relative min-h-[600px]">
          {/* Background Image */}
          <div className="absolute top-0 bottom-0 left-0 w-[45%] overflow-visible">
            <div className="relative w-[120%] h-[130%] -mt-[10%] -ml-[10%]">
              <Image
                src="/images/leaf-bg.png"
                alt="Folha decorativa"
                fill
                className="object-cover"
                style={{
                  objectPosition: '60% 50%'
                }}
                priority
              />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="flex items-start">
              {/* Lado esquerdo - Título */}
              <div className="w-[45%] relative pl-12 pt-24">
                <span className="text-white uppercase tracking-wider text-sm mb-6 block font-light drop-shadow-md">DIFERENCIAIS</span>
                <h2 className="text-[42px] font-light text-white leading-[1.2] drop-shadow-md" style={{
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}>
                  <span className="italic block mb-2">A vida urbana aliada</span>
                  <span className="italic block mb-2">ao bem-estar que só</span>
                  <span className="italic block">a natureza nos dá.</span>
                </h2>
              </div>

              {/* Lado direito - Diferenciais em grid */}
              <div className="w-[55%] pl-16 pt-12">
                <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                  {/* Áreas verdes */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c.42 0 .8-.26.94-.66.14-.4.03-.84-.28-1.13l-.06-.06c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l.06.06c.29.29.73.4 1.13.28.4-.14.66-.52.66-.94V7c0-.55.45-1 1-1s1 .45 1 1v.08c0 .42.26.8.66.94.4.14.84.03 1.13-.28l.06-.06c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-.06.06c-.29.29-.4.73-.28 1.13.14.4.52.66.94.66H17c.55 0 1 .45 1 1s-.45 1-1 1h-.08c-.42 0-.8.26-.94.66-.14.4-.03.84.28 1.13l.06.06c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0l-.06-.06c-.29-.29-.73-.4-1.13-.28-.4.14-.66.52-.66.94V17c0 .55-.45 1-1 1s-1-.45-1-1v-.08c0-.42-.26-.8-.66-.94-.4-.14-.84-.03-1.13.28l-.06.06c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l.06-.06c.29-.29.4-.73.28-1.13-.14-.4-.52-.66-.94-.66H7c-.55 0-1-.45-1-1s.45-1 1-1z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Áreas verdes exuberantes</span>
                  </div>

                  {/* Infraestrutura */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2M9 4h6v2H9V4m11 15H4V8h16v11"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Infraestrutura completa</span>
                  </div>

                  {/* Lazer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Lazer completo</span>
                  </div>

                  {/* Sustentabilidade */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17 8h3v12h-3v-12zm-5 4h3v8h-3v-8zm-5 4h3v4h-3v-4zm-5-12h3v16h-3v-16z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Sustentabilidade na construção</span>
                  </div>

                  {/* Coleta */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V5h14v14m-7-2h2v-4h4v-2h-4V7h-2v4h4v2z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Coleta seletiva</span>
                  </div>

                  {/* Flexibilidade */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21 11h-3V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v7H3c-.55 0-1 .45-1 1s.45 1 1 1h3v7c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7h3c.55 0 1-.45 1-1s-.45-1-1-1m-5 8H8V5h8v14z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Flexibilidade na construção</span>
                  </div>

                  {/* Projeto */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 3h18v2H3V3m0 4h18v2H3V7m0 4h18v2H3v-2m0 4h18v2H3v-2m0 4h18v2H3v-2z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Projeto urbanístico moderno</span>
                  </div>

                  {/* Acesso controlado */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Acesso controlado na portaria 24h</span>
                  </div>

                  {/* Acesso fácil */}
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-white rounded-2xl p-4 w-[80px] h-[80px] flex items-center justify-center mb-2">
                      <svg className="w-10 h-10 text-[#C2B59B]" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                      </svg>
                    </div>
                    <span className="text-white text-sm font-light">Acesso fácil à cidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imagens e Vídeos */}
      <ImagensVideos />
      <StatusObra />
      <Localizacao />
    </>
  )
} 