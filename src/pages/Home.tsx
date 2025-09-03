import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Award, Heart, Target, Zap, Star, User, ArrowDown, Instagram, Facebook } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    const observeElements = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      elements.forEach((el) => observer.observe(el));
    };

    const timer = setTimeout(observeElements, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-0">
      {/* Hero Banner Section - Full Width */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Sophie Wagner - Personal Trainer København"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-energetic-blue/60 via-energetic-blue/40 to-energetic-green/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/30 via-transparent to-transparent"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-energetic-blue/10 rounded-full blur-3xl z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 lg:w-96 h-64 lg:h-96 bg-energetic-green/10 rounded-full blur-3xl z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32 text-center">
          <div className="animate-on-scroll">
            <div className="mb-8 lg:mb-12">
              <span className="inline-block px-6 lg:px-8 py-3 lg:py-4 bg-fresh-white/20 backdrop-blur-sm text-fresh-white font-medium tracking-widest text-sm uppercase rounded-full border border-fresh-white/20">
                Certificeret Personal Træner
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-fresh-white mb-6 lg:mb-8 leading-tight tracking-tight">
              Sophie Wagner
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-light-blue mb-6 lg:mb-8 font-medium leading-relaxed max-w-5xl mx-auto">
              Styrketræning, funktionel movement, pilates, løb, ernæring og balance i hverdagen
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-fresh-white/90 mb-8 lg:mb-12 font-light leading-relaxed max-w-4xl mx-auto">
              <strong className="text-light-green">Styrke, balance og bevægelsesglæde – indefra og ud</strong>
            </p>
            
            <div className="space-y-6 lg:space-y-8 text-base sm:text-lg lg:text-xl text-fresh-white/80 mb-12 lg:mb-16 font-light leading-relaxed max-w-5xl mx-auto">
              <p>
                Certificeret personlig træner, holdtræner og kostvejleder – med fokus på at skabe resultater, 
                der passer ind i din hverdag.
              </p>
              <p>
                Jeg hjælper dig med at opbygge styrke, forbedre din mobilitet og finde balancen mellem 
                træning, ernæring og et aktivt liv.
              </p>
              <p>
                Mit mål er ikke kun at gøre dig stærkere fysisk – men også at hjælpe dig med at udvikle 
                dig indefra og ud: at booste dit potentiale, din selvtillid og dit selvværd.
              </p>
              <p className="text-light-green font-medium text-xl">
                👉 Book en uforpligtende samtale i dag og tag første skridt mod et stærkere og mere balanceret liv.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center justify-center">
              <Link
                to="/kontakt"
                className="group bg-energetic-blue text-fresh-white px-8 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm-xl transition-all duration-500 font-medium tracking-wide text-sm uppercase flex items-center gap-3 transform hover:scale-105"
              >
                Book uforpligtende samtale
                <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              
              <a href="#om-sophie" className="group flex items-center gap-4 text-fresh-white/80 hover:text-light-blue transition-all duration-500 font-light tracking-wide text-sm uppercase">
                <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-full border-2 border-fresh-white/30 group-hover:border-light-blue flex items-center justify-center transition-all duration-500 group-hover:shadow-warm backdrop-blur-sm bg-fresh-white/10">
                  <Play size={14} className="ml-1 group-hover:scale-110 transition-transform duration-300" />
                </div>
                Læs mere om Sophie
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-fresh-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fresh-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Om Sophie Section */}
      <section id="om-sophie" className="py-24 lg:py-32 bg-soft-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-energetic-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-energetic-green/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-8 bg-gradient-to-br from-energetic-blue/10 to-energetic-green/5 rounded-3xl transform rotate-3 group-hover:rotate-2 transition-transform duration-1000"></div>
                <div className="absolute -inset-4 bg-energetic-blue/5 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-1000"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner - Fra New Zealand til København, personlig træner og kostvejleder"
                    className="w-full h-[500px] lg:h-[700px] object-cover transform group-hover:scale-105 transition-transform duration-3000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-energetic-blue/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll order-1 lg:order-2">
              <span className="inline-block px-6 py-3 bg-energetic-blue/10 text-energetic-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12">
                Om mig
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight">
                Fra <em className="text-energetic-green">passion</em><br />
                til profession
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-dark-gray/70 leading-relaxed font-light mb-12 lg:mb-16">
                <p>
                  Jeg er 27 år og født og opvokset i New Zealand af danske forældre, hvor jeg tidligt 
                  fandt glæden ved bevægelse. Siden jeg kan huske, har jeg dyrket fitness, styrketræning, 
                  løb, dans og sejlads – og med 14 års baggrund som balletdanser har kroppen altid været 
                  en central del af mit liv.
                </p>
                <p>
                  Efter at have læst naturvidenskab på Københavns Universitet valgte jeg at gå all in på træning. 
                  Jeg tog et intenst år på Paul Petersens Idrætsinstitut, hvor jeg fordybede mig i anatomi, 
                  fysiologi og træningslære – og fik værktøjerne til at arbejde professionelt med krop og bevægelse.
                </p>
                <p>
                  Jeg har tidligere sejlet som gast, underviser og kaptajn, hvor jeg lærte, hvor meget disciplin, 
                  styrke og samarbejde betyder for at nå et fælles mål. Den erfaring har jeg taget med mig ind i 
                  min træning, hvor jeg brænder for at fremme team spirit – både når jeg arbejder med hold, 
                  virksomheder og i mine bootcamps.
                </p>
                <p>
                  De seneste par år har jeg arbejdet som fuldtids selvstændig personlig træner og hjulpet 
                  hundredvis af mennesker i København med at finde styrke, balance og glæde i deres træning og hverdag. 
                  Til daglig er jeg personlig træner i Sporting Health Club, underviser på hold i Barry's Copenhagen, 
                  samarbejder med forskellige kontorfællesskaber og afholder udendørs bootcamps – både for private og virksomheder.
                </p>
              </div>

              <a href="#ydelser" className="group bg-energetic-blue text-fresh-white px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm-xl transition-all duration-500 font-medium tracking-wide text-sm uppercase flex items-center gap-4 transform hover:scale-105 w-fit">
                Læs om mine ydelser
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Min tilgang Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-fresh-white via-soft-gray/50 to-energetic-blue/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-energetic-blue/5 via-transparent to-energetic-green/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20 lg:mb-24">
            <span className="inline-block px-6 py-3 bg-energetic-blue/10 text-energetic-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Min tilgang
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight animate-on-scroll max-w-5xl mx-auto">
              Funktionel træning der <em className="text-energetic-green">styrker</em><br />
              både krop og sind
            </h2>
            <p className="text-lg lg:text-xl text-dark-gray/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Jeg kombinerer funktionel styrketræning, funktionel movement, mobilitet, pilates og personlig 
              ernæringsvejledning. På den måde skaber jeg skræddersyede programmer, der styrker både krop og sind 
              – og hjælper dig med at arbejde med din krop i stedet for imod den.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 lg:mb-24">
            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-4 bg-energetic-blue/5 rounded-2xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner funktionel træning og styrketræning København"
                    className="w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-2000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-energetic-blue/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll">
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-dark-gray/70 leading-relaxed font-light">
                <p>
                  For mig er det vigtigt, at hver enkelt klient ikke kun oplever fremgang i træningen, 
                  men også får styrket deres potentiale, selvtillid og selvværd.
                </p>
                <p>
                  Jeg tror på balance fremfor perfektion, og at varig forandring sker indefra og ud – 
                  fordi træning og sundhed skal støtte dit liv, ikke kontrollere det.
                </p>
                <div className="bg-energetic-blue/10 rounded-2xl p-6 lg:p-8">
                  <h3 className="text-lg lg:text-xl font-serif text-dark-gray mb-4">Mine specialer:</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm lg:text-base">
                    <div className="flex items-center gap-3">
                      <span className="text-energetic-blue">💪</span>
                      <span>Styrketræning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-energetic-blue">🤸</span>
                      <span>Funktionel Movement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-energetic-blue">✨</span>
                      <span>Pilates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-energetic-blue">🥗</span>
                      <span>Ernæring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-energetic-blue">🧘</span>
                      <span>Mindfulness</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificeringer Section */}
      <section className="py-24 lg:py-32 bg-fresh-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-energetic-blue/10 text-energetic-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Certificeringer & Baggrund
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Solid <em className="text-energetic-green">faglig ballast</em>
            </h2>
            <p className="text-lg lg:text-xl text-dark-gray/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Jeg bygger min træning på både erfaring og en solid faglig ballast. Mine certificeringer inkluderer:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-soft-gray/50 rounded-2xl p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10 text-center">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📜</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-dark-gray mb-4">EREPS-certificeret</h3>
              <p className="text-dark-gray/70 font-light">Personlig træner</p>
              <p className="text-sm text-dark-gray/50 font-light mt-2">Paul Petersens Idrætsinstitut</p>
            </div>

            <div className="bg-soft-gray/50 rounded-2xl p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10 text-center">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-dark-gray mb-4">Yoga Instruktør</h3>
              <p className="text-dark-gray/70 font-light">100 timers certificering</p>
              <p className="text-sm text-dark-gray/50 font-light mt-2">Mindfulness & Balance</p>
            </div>

            <div className="bg-soft-gray/50 rounded-2xl p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10 text-center">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏋️</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-dark-gray mb-4">Kostvejleder</h3>
              <p className="text-dark-gray/70 font-light">Ernæring & Livsstil</p>
              <p className="text-sm text-dark-gray/50 font-light mt-2">Holistisk tilgang</p>
            </div>

            <div className="bg-soft-gray/50 rounded-2xl p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10 text-center">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-dark-gray mb-4">Løbecoach</h3>
              <p className="text-dark-gray/70 font-light">Løbeteknik & Udholdenhed</p>
              <p className="text-sm text-dark-gray/50 font-light mt-2">Funktionel løbetræning</p>
            </div>

            <div className="bg-soft-gray/50 rounded-2xl p-8 lg:p-10 hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10 text-center">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⛵</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-serif font-light text-dark-gray mb-4">Yachtskipper</h3>
              <p className="text-dark-gray/70 font-light">3. grad certificering</p>
              <p className="text-sm text-dark-gray/50 font-light mt-2">Disciplin & Teamwork</p>
            </div>
          </div>

          <div className="text-center mt-16 lg:mt-20 animate-on-scroll">
            <p className="text-lg lg:text-xl text-dark-gray/70 leading-relaxed font-light max-w-4xl mx-auto">
              Denne kombination giver mig en unik tilgang, hvor klassisk træning, funktionel fitness 
              og holistiske principper smelter sammen – så du får et forløb, der styrker både krop og sind.
            </p>
          </div>
        </div>
      </section>

      {/* Ydelser Section */}
      <section id="ydelser" className="py-24 lg:py-32 bg-gradient-to-br from-energetic-blue/5 to-soft-gray/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-energetic-blue/5 via-transparent to-energetic-green/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-energetic-blue/10 text-energetic-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Ydelser
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Skræddersyet til <em className="text-energetic-green">dig</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Personal Training */}
            <div className="bg-fresh-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-dark-gray mb-6">Personlig Træning</h3>
              <p className="text-dark-gray/70 mb-8 leading-relaxed font-light text-lg">
                1:1 træning med fuld fokus på dig og dine mål – styrke, mobilitet, vægttab eller generel sundhed.
                Jeg tilbyder også small group træning for to personer – f.eks. veninder, venner eller par – der ønsker et fælles og personligt forløb.
              </p>
              <div className="bg-energetic-blue/10 rounded-xl p-4 mb-8">
                <p className="text-energetic-blue font-medium text-center">👉 Kontakt for pris</p>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-energetic-blue text-fresh-white py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm transition-all duration-500 font-medium tracking-wide text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Book session
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Firma Training */}
            <div className="bg-fresh-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-dark-gray mb-6">Firma Træning</h3>
              <p className="text-dark-gray/70 mb-8 leading-relaxed font-light text-lg">
                Jeg tilbyder skræddersyede træningsforløb til virksomheder, der ønsker at styrke sundhed, trivsel og 
                fællesskab på arbejdspladsen. Jeg kan komme ud til jer – uanset om I har udstyr eller ej – og tilrettelægger 
                træningen, så den passer til jeres behov og rammer.
              </p>
              <div className="bg-energetic-blue/10 rounded-xl p-4 mb-8">
                <p className="text-energetic-blue font-medium text-center">👉 Kontakt for pris</p>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-energetic-blue text-fresh-white py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm transition-all duration-500 font-medium tracking-wide text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Få tilbud
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Online Coaching */}
            <div className="bg-fresh-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-dark-gray mb-6">Online Coaching</h3>
              <p className="text-dark-gray/70 mb-8 leading-relaxed font-light text-lg">
                Fleksibel træning med løbende sparring, programmer og check-ins via app.
                Klienter kan følge deres forløb, stille spørgsmål og få kontinuerlig feedback – uanset hvor de befinder sig.
              </p>
              <div className="bg-energetic-blue/10 rounded-xl p-4 mb-8">
                <p className="text-energetic-blue font-medium text-center">👉 Kontakt for pris</p>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-energetic-blue text-fresh-white py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm transition-all duration-500 font-medium tracking-wide text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Start i dag
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Hjemme Pilates */}
            <div className="bg-fresh-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll border border-energetic-blue/10">
              <div className="w-16 h-16 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif font-light text-dark-gray mb-6">Hjemme Pilates Træning</h3>
              <p className="text-dark-gray/70 mb-8 leading-relaxed font-light text-lg">
                Personlig pilatestræning i trygge rammer hjemme hos dig, tilpasset dit niveau og dine mål.
              </p>
              <div className="bg-energetic-blue/10 rounded-xl p-4 mb-8">
                <p className="text-energetic-blue font-medium text-center">👉 Kontakt for pris</p>
              </div>
              <Link
                to="/kontakt"
                className="w-full bg-energetic-blue text-fresh-white py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm transition-all duration-500 font-medium tracking-wide text-sm uppercase transform hover:scale-105 flex items-center justify-center gap-3"
              >
                Book pilates
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Priser Section */}
      <section id="priser" className="py-24 lg:py-32 bg-soft-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-energetic-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-energetic-green/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-energetic-blue/10 text-energetic-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Priser
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Skræddersyede <em className="text-energetic-green">løsninger</em>
            </h2>
            <p className="text-lg lg:text-xl text-dark-gray/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Alle mine ydelser er skræddersyet til dine specifikke behov og mål.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-fresh-white/90 backdrop-blur-sm rounded-2xl p-12 lg:p-16 shadow-warm-xl border border-energetic-blue/10 text-center animate-on-scroll">
              <div className="w-20 h-20 bg-energetic-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-serif font-light text-dark-gray mb-8">Kontakt for pris</h3>
              <p className="text-lg lg:text-xl text-dark-gray/70 leading-relaxed font-light mb-12">
                Da alle mine ydelser er skræddersyet til den enkelte klient, varierer priserne afhængigt af 
                dine specifikke behov, mål og ønsker til forløbet.
              </p>
              <Link
                to="/kontakt"
                className="group bg-energetic-blue text-fresh-white px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm-xl transition-all duration-500 font-medium tracking-wide text-sm uppercase flex items-center gap-4 transform hover:scale-105 mx-auto w-fit"
              >
                Få dit personlige tilbud
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Samarbejde Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-fresh-white via-soft-gray/50 to-energetic-green/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-energetic-green/5 via-transparent to-energetic-blue/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block px-6 py-3 bg-energetic-green/10 text-energetic-green font-medium tracking-widest text-xs uppercase rounded-full mb-12">
                Samarbejde
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight">
                Åben for <em className="text-energetic-blue">samarbejder</em>
              </h2>
              
              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-dark-gray/70 leading-relaxed font-light mb-12 lg:mb-16">
                <p>
                  Jeg er altid åben for spændende fitness-relaterede samarbejder – det kan være alt fra events og workshops 
                  til kampagner, fotoshoots eller brand-partnerskaber inden for træning, sundhed og livsstil.
                </p>
                <p>
                  Jeg har tidligere lavet samarbejder og modelarbejde for forskellige sportsbrands, hvor jeg har kombineret 
                  min faglige viden som træner med et stærkt visuelt udtryk. Det giver mulighed for at skabe inspirerende 
                  indhold, der motiverer andre til at finde glæde i bevægelse og sundhed.
                </p>
                <p className="text-energetic-blue font-medium">
                  👉 Er du interesseret i et samarbejde?
                </p>
                <p>
                  Kontakt mig direkte på kontakt@sophiewagner.dk eller via kontaktformularen – jeg glæder mig til at høre fra dig!
                </p>
              </div>

              <Link
                to="/kontakt"
                className="group bg-energetic-green text-fresh-white px-8 lg:px-10 py-4 lg:py-5 rounded-full hover:bg-deep-green hover:shadow-warm-xl transition-all duration-500 font-medium tracking-wide text-sm uppercase flex items-center gap-4 transform hover:scale-105 w-fit"
              >
                Kontakt for samarbejde
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>

            <div className="animate-on-scroll">
              <div className="relative group">
                <div className="absolute -inset-4 bg-energetic-green/5 rounded-2xl blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-warm-xl">
                  <img
                    src="https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Sophie Wagner samarbejde og brand partnerships"
                    className="w-full h-[500px] lg:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-2000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-energetic-green/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-24 lg:py-32 bg-fresh-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-energetic-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-energetic-green/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 lg:mb-20">
            <span className="inline-block px-6 py-3 bg-energetic-blue/10 text-energetic-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12 animate-on-scroll">
              Følg Sophie
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-dark-gray mb-8 lg:mb-12 leading-tight animate-on-scroll">
              Sophie på <em className="text-energetic-green">Instagram</em>
            </h2>
            <p className="text-lg lg:text-xl text-dark-gray/70 leading-relaxed font-light max-w-4xl mx-auto animate-on-scroll">
              Få daglig inspiration, træningsvideos og tips til styrketræning, pilates og ernæring. 
              Følg Sophie's rejse og bliv en del af fællesskabet.
            </p>
          </div>

          {/* Instagram Feed Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mb-12 lg:mb-16">
            {[1,2,3,4,5,6].map((index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-warm hover:shadow-warm-xl transition-all duration-700 animate-on-scroll aspect-square">
                <img
                  src={`https://images.pexels.com/photos/475398${index}/pexels-photo-475398${index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`}
                  alt={`Sophie Wagner Instagram post ${index}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-2000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-fresh-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Instagram className="text-fresh-white" size={16} />
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center">
            <a
              href="https://instagram.com/sophiewagner_fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full hover:from-pink-600 hover:to-purple-700 hover:shadow-warm-xl transition-all duration-500 font-medium tracking-wide text-sm uppercase flex items-center gap-4 transform hover:scale-105 mx-auto w-fit"
            >
              <Instagram size={20} />
              Følg @sophiewagner_fitness
              <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-dark-gray text-fresh-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-gray via-dark-gray/95 to-energetic-blue/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-energetic-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-energetic-green/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="animate-on-scroll">
            <span className="inline-block px-6 py-3 bg-energetic-blue/40 text-light-blue font-medium tracking-widest text-xs uppercase rounded-full mb-12 border border-energetic-blue/30">
              Klar til at starte?
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-light mb-8 lg:mb-12 leading-tight text-fresh-white">
              Start din <em className="text-light-blue">transformation</em><br />
              med Sophie
            </h2>
            
            <p className="text-lg lg:text-xl text-fresh-white/80 leading-relaxed font-light max-w-4xl mx-auto mb-12 lg:mb-16">
              Book en uforpligtende samtale med Sophie Wagner og oplev forskellen ved 
              professionel træning, der styrker dig indefra og ud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-center justify-center">
              <Link
                to="/kontakt"
                className="group bg-energetic-blue text-fresh-white px-10 lg:px-12 py-4 lg:py-5 rounded-full hover:bg-deep-blue hover:shadow-warm-xl transition-all duration-500 font-medium tracking-wide text-sm uppercase flex items-center gap-4 transform hover:scale-105"
              >
                Book uforpligtende samtale
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              
              <a href="#ydelser" className="group flex items-center gap-4 text-fresh-white/70 hover:text-light-blue transition-all duration-500 font-light tracking-wide text-sm uppercase">
                Se alle ydelser
                <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;