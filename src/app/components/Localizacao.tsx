'use client'

import Image from 'next/image'

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-24 bg-gradient-to-b from-white to-[#F8F5F0] relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00A651]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#00A651]/5 rounded-full blur-2xl"></div>
      
      {/* Padrão de pontos decorativo */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(#00A651 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-wider text-sm mb-4 block font-medium">LOCALIZAÇÃO</span>
          <h2 className="text-5xl font-display text-[#4A3418] mb-6 italic">
            O privilégio de morar em contato com a natureza e perto da cidade.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Damha Fit II fica a apenas 5 minutos do centro da cidade, e muito próximo de supermercados, farmácias, escolas, entre outros estabelecimentos fundamentais para a sua conveniência.
          </p>
        </div>

        {/* Mapa e Informações */}
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Mapa */}
          <div className="lg:w-2/3 relative">
            <div className="absolute inset-0 bg-[#00A651]/10 transform rotate-3 rounded-2xl"></div>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/images/mapa-localizacao.jpg"
                alt="Mapa de localização"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white hover:bg-[#00A651] hover:text-white text-[#00A651] px-8 py-4 rounded-full shadow-xl transition-all duration-300 flex items-center space-x-3 transform hover:scale-105">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="font-medium tracking-wide">COMO CHEGAR</span>
                </button>
              </div>
            </div>
          </div>

          {/* Informações */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl p-10 h-full flex flex-col justify-between shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A651]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
              
              <h3 className="text-3xl font-display text-[#4A3418] mb-10 relative">
                Localização privilegiada
                <div className="absolute -bottom-4 left-0 w-16 h-1 bg-gold"></div>
              </h3>
              
              <div className="space-y-12 flex-grow relative z-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#F8F5F0] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#00A651] group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7 text-[#00A651] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#4A3418] mb-3">Endereço</h4>
                    <p className="text-gray-600 leading-relaxed">Rodovia Municipal Joaquim Ferreira, km 5, saída para Água Vermelha</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#F8F5F0] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#00A651] group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7 text-[#00A651] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#4A3418] mb-3">Tempo até o centro</h4>
                    <p className="text-gray-600 leading-relaxed">Apenas 5 minutos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#F8F5F0] rounded-full flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#00A651] group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7 text-[#00A651] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[#4A3418] mb-3">Proximidades</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A651]"></span>
                        <span>Supermercados</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A651]"></span>
                        <span>Farmácias</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A651]"></span>
                        <span>Escolas</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A651]"></span>
                        <span>Hospitais</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 