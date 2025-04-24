'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ImagensVideos() {
  const [activeTab, setActiveTab] = useState('fotos')

  return (
    <section id="imagens" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-wider text-sm mb-4 block">IMAGENS E VÍDEOS</span>
          <h2 className="text-4xl font-display text-[#4A3418] mb-4 italic">
            Conhecer o Damha Fit II é se encantar.
          </h2>
          <p className="text-2xl text-[#4A3418] italic">
            Lotes a partir de 5.000 m².
          </p>
        </div>

        {/* Abas */}
        <div className="flex justify-center mb-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('fotos')}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'fotos' 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gold hover:border-gold'
                }`}
              >
                FOTOS
              </button>
              <button 
                onClick={() => setActiveTab('mapa')}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'mapa' 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gold hover:border-gold'
                }`}
              >
                MAPA
              </button>
              <button 
                onClick={() => setActiveTab('videos')}
                className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === 'videos' 
                    ? 'border-gold text-gold' 
                    : 'border-transparent text-gray-500 hover:text-gold hover:border-gold'
                }`}
              >
                VÍDEOS
              </button>
            </nav>
          </div>
        </div>

        {/* Conteúdo das Abas */}
        {activeTab === 'fotos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Imagem 1 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/academia.jpg"
                alt="Academia"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Imagem 2 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/entrada.jpg"
                alt="Entrada do condomínio"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Imagem 3 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/espaco-gourmet.jpg"
                alt="Espaço Gourmet"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Imagem 4 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/vista-aerea-1.jpg"
                alt="Vista Aérea"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Imagem 5 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/vista-aerea-2.jpg"
                alt="Vista Aérea"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Imagem 6 */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="/images/vista-aerea-3.jpg"
                alt="Vista Aérea"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mapa' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/mapa-damha.jpg"
                alt="Mapa do empreendimento"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white text-gold px-6 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>Ampliar Mapa</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <video
                src="/videos/damha-fit.mp4"
                controls
                className="w-full h-full"
                poster="/images/video-thumbnail.jpg"
              >
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
            <p className="text-center mt-4 text-gray-600">
              Tour virtual pelo Damha Fit II
            </p>
          </div>
        )}

        {/* Nota de rodapé */}
        <p className="text-gray-500 text-sm mt-12 text-center">
          Imagens meramente ilustrativas. Projeto aprovado nos termos do processo nº 6850/2017.
        </p>
      </div>
    </section>
  )
} 