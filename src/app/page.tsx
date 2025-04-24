'use client'

<<<<<<< HEAD
import React from 'react'
=======
>>>>>>> c066f610c68a3167bc59713f866782e719656391
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
<<<<<<< HEAD
      <section id="diferenciais" className="bg-[#1B5E20] relative overflow-hidden py-24">
        <div className="container mx-auto px-4 relative z-10">
          {/* Título e Subtítulo */}
          <div className="max-w-3xl">
            <h2 className="text-4xl text-white font-bold mb-6">
              O Lugar onde lazer e conforto são prioridades
            </h2>
            <p className="text-white/90 text-lg leading-relaxed mb-16">
              No Damha Fit Uberaba, o lazer é completo e pensado para transformar sua rotina. Piscinas, 
              quadras esportivas, academia equipada e espaços gourmet oferecem momentos únicos 
              para todas as idades. Seja relaxando, cuidando da saúde ou celebrando, você aproveita o 
              melhor da vida sem sair de casa, com a segurança e a privacidade que você merece.
            </p>
          </div>

          {/* Grid de Diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Centro de Convívio */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 5.5A2.5 2.5 0 0114.5 8a2.5 2.5 0 01-2.5 2.5A2.5 2.5 0 019.5 8 2.5 2.5 0 0112 5.5M12 2a6 6 0 016 6c0 4.5-6 11-6 11S6 12.5 6 8a6 6 0 016-6m0 2a4 4 0 00-4 4c0 2.9 4 8 4 8s4-5.1 4-8a4 4 0 00-4-4z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Centro de Convívio</h3>
            </div>

            {/* Quadra Poliesportiva */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Quadra Poliesportiva</h3>
            </div>

            {/* Mini Campo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Mini Campo</h3>
            </div>

            {/* Quadra de Tênis Saibro */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Quadra de Tênis Saibro</h3>
            </div>

            {/* Beach Tênis */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Beach Tênis</h3>
            </div>

            {/* Quadra de Vôlei */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Quadra de Vôlei</h3>
            </div>

            {/* Playground */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Playground</h3>
            </div>

            {/* Churrasqueira */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Churrasqueira</h3>
            </div>

            {/* Espaço Pet */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#1B5E20]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Espaço Pet</h3>
            </div>
          </div>
        </div>

        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
=======
      <section id="diferenciais" className="bg-[#1B4538] relative overflow-hidden">
        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Lado esquerdo - Título e descrição */}
            <div className="lg:w-[40%]">
              <h2 className="text-[42px] font-medium text-white leading-tight mb-8">
                O Lugar onde<br />
                lazer e conforto<br />
                são prioridades
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                No Damha Fit Uberaba, o lazer é completo e pensado para
                transformar sua rotina. Piscinas, quadras esportivas, academia
                equipada e espaços gourmet oferecem momentos únicos
                para todas as idades. Seja relaxando, cuidando da saúde ou
                celebrando, você aproveita o melhor da vida sem sair de casa,
                com a segurança e a privacidade que você merece.
              </p>
            </div>

            {/* Lado direito - Grid de amenidades */}
            <div className="lg:w-[60%]">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Centro de Convívio */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Centro de Convívio</span>
                </div>

                {/* Quadra Poliesportiva */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Quadra Poliesportiva</span>
                </div>

                {/* Mini Campo */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Mini Campo</span>
                </div>

                {/* Quadra de Tênis Saibro */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Quadra de Tênis Saibro</span>
                </div>

                {/* Beach Tênis */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Beach Tênis</span>
                </div>

                {/* Quadra de Vôlei */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Quadra de Vôlei</span>
                </div>

                {/* Playground */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Playground</span>
                </div>

                {/* Churrasqueira */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Churrasqueira</span>
                </div>

                {/* Espaço Pet */}
                <div className="bg-[#2A6152] rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center shadow-lg">
                  <div className="w-16 h-16 mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-3.5l6-4.5-6-4.5v9z"/>
                    </svg>
                  </div>
                  <span className="text-white text-lg font-light">Espaço Pet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
>>>>>>> c066f610c68a3167bc59713f866782e719656391
      </section>

      {/* Imagens e Vídeos */}
      <ImagensVideos />
      <StatusObra />
      <Localizacao />
    </>
  )
} 