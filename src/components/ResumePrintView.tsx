import React from 'react';
import { resumeData } from '../data';
import { Phone, Mail, MapPin, Award, BookOpen, Briefcase, Trophy, ClipboardCheck, Globe, Calendar, Camera, Printer, RotateCcw, AlertCircle } from 'lucide-react';
import defaultProfileImg from '../assets/images/ezzy_yang_profile_1782353169455.jpg';

export default function ResumePrintView() {
  const { name, title, phone, email, location, birthYear, summary, experience, education, skills, projects } = resumeData;

  // Local state to store uploaded custom image
  const [customImage, setCustomImage] = React.useState<string | null>(() => {
    try {
      return localStorage.getItem('ezzy_yang_custom_avatar');
    } catch (e) {
      return null;
    }
  });

  const activeImage = customImage || defaultProfileImg;

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && typeof event.target.result === 'string') {
          setCustomImage(event.target.result);
          try {
            localStorage.setItem('ezzy_yang_custom_avatar', event.target.result);
          } catch (err) {
            console.error("Storage error:", err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Filter high-impact projects matching premium IP
  const highImpactProjects = projects.filter(p => 
    p.id === 'proj_val_masters_2025' || 
    p.id === 'proj_lck_douyu_2022' || 
    p.id === 'proj_pgs_pgc_2023' ||
    p.id === 'proj_chungnam_2025'
  );

  // Core Qualifications
  const coreQualifications = [
    {
      title: "Partnership & Licensing",
      desc: "Media rights, streaming contracts, and sponsor activations."
    },
    {
      title: "Account Management",
      desc: "Liaison for publishers (Riot, Krafton) and regional partners."
    },
    {
      title: "On-Stream Activation",
      desc: "Broadcast overlays, stream branding, and sponsor placements."
    },
    {
      title: "Contract & Budgeting",
      desc: "Business proposals, vendor agreements, and financial audits."
    }
  ];

  return (
    <div className="flex flex-col gap-6 items-center w-full max-w-[820px] mx-auto p-4 md:p-0">
      
      {/* PDF Export Helper Panel (Hidden on Print) */}
      <div className="w-full bg-[#0f131a] border border-rose-500/20 rounded-2xl p-5 shadow-2xl print-hidden no-print">
        <div className="flex items-start gap-3.5">
          <div className="p-2 bg-rose-500/10 rounded-lg border border-rose-500/20 text-rose-500 shrink-0">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase font-mono">
                PDF EXPORT GUIDE
              </span>
              <h3 className="text-sm font-black text-white">프리미엄 PDF 인쇄 및 저장 가이드</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              넷틀리파이(Netlify) 배포 후 PDF로 가장 예쁘게 변환하여 제출하실 수 있도록 최적화되었습니다. 아래 설정을 준수해 주세요. (본 안내창은 인쇄 시 자동으로 숨김 처리됩니다)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-[11px] text-slate-300">
          <div className="bg-[#080c14] rounded-lg p-3 border border-slate-900 space-y-1.5">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="text-rose-500 font-mono">01.</span> 필수 인쇄 옵션 활성화
            </h4>
            <p className="text-slate-400 leading-relaxed">
              인쇄/저장 대화상자에서 <span className="text-rose-400 font-bold">배경 그래픽(Background graphics)</span> 옵션을 반드시 켜주세요. 그래야 다크 슬레이트 테마의 디자인과 색상이 온전히 유지됩니다.
            </p>
          </div>
          
          <div className="bg-[#080c14] rounded-lg p-3 border border-slate-900 space-y-1.5">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="text-rose-500 font-mono">02.</span> 여백 및 배율 정렬
            </h4>
            <p className="text-slate-400 leading-relaxed">
              여백(Margins)을 <span className="text-cyan-400 font-bold">'없음(None)'</span> 또는 <span className="text-cyan-400 font-bold">'최소(Minimum)'</span>로 지정해 주시면 한 페이지에 대칭이 깔끔하게 맞춰집니다.
            </p>
          </div>

          <div className="bg-[#080c14] rounded-lg p-3 border border-slate-900 space-y-1.5">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="text-rose-500 font-mono">03.</span> 자유로운 사진 커스터마이징
            </h4>
            <p className="text-slate-400 leading-relaxed">
              이력서의 사진 부분을 클릭하여 원하는 고해상도 증명사진을 언제든 교체할 수 있습니다. 이미지는 브라우저의 안전한 개별 저장소에 저장되어 유지됩니다.
            </p>
          </div>

          <div className="bg-[#080c14] rounded-lg p-3 border border-slate-900 space-y-1.5">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <span className="text-rose-500 font-mono">04.</span> Netlify 호스팅 완벽 대응
            </h4>
            <p className="text-slate-400 leading-relaxed">
              Netlify의 단독 도메인에서도 완벽하게 동작하며, 모바일이나 태블릿 브라우저에서도 간편하게 본인의 맞춤 이력서를 생성하고 다운로드받을 수 있습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-slate-800/80">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer shadow-md shadow-rose-950/20"
          >
            <Printer className="w-4 h-4" />
            PDF로 저장 / 인쇄하기
          </button>

          {customImage && (
            <button 
              onClick={() => {
                if (confirm("정말로 업로드한 사진을 삭제하고 기본 사진으로 복원하시겠습니까?")) {
                  setCustomImage(null);
                  try {
                    localStorage.removeItem('ezzy_yang_custom_avatar');
                  } catch (e) {}
                }
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-[#1a202c] hover:bg-[#222b3c] text-slate-300 font-medium text-xs rounded-lg transition-colors cursor-pointer border border-slate-800"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              기본 사진으로 리셋
            </button>
          )}
        </div>
      </div>

      {/* Printable Resume Canvas */}
      <div 
        id="print-resume" 
        className="w-full max-w-[820px] bg-[#080c14] text-slate-200 p-8 mx-auto font-sans shadow-2xl border border-slate-900 min-h-[1140px] flex flex-col justify-between"
      >
        <div>
          {/* Top Header Block */}
          <div className="relative mb-6 pb-6 border-b border-slate-800/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center gap-5">
              {/* Interactive Profile Image (Fully customizable by user) */}
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative shrink-0 cursor-pointer group"
                title="클릭하여 사진 등록 / 변경"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-rose-700 rounded-lg opacity-75 blur-[2px] group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="w-20 h-20 rounded-lg bg-slate-950 border border-slate-800 relative z-10 overflow-hidden flex items-center justify-center transition-all duration-200 group-hover:border-rose-500 shadow-md">
                  <img 
                    src={activeImage} 
                    alt="Ezzy Yang" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover overlay - Hidden in print */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 transition-opacity duration-200 print-hidden no-print z-20">
                    <Camera className="w-4 h-4 text-rose-500" />
                    <span className="text-[8px] font-bold text-white uppercase font-mono tracking-wider">CHANGE</span>
                  </div>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageUpload} 
                  accept="image/*" 
                  className="hidden" 
                />
              </div>

            <div>
              <div className="flex items-baseline gap-2">
                <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">
                  {name}
                </h1>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase font-mono">
                  양이지
                </span>
              </div>
              <p className="text-xs font-black text-rose-500 tracking-wider uppercase mt-1">
                {title}
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-2.5 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  {phone}
                </span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  {email}
                </span>
                <span className="text-slate-700">•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  {location}
                </span>
                {birthYear && (
                  <>
                    <span className="text-slate-700">•</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      Born in {birthYear}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="text-left sm:text-right border-l-2 sm:border-l-0 sm:border-r-2 border-rose-500 pl-4 sm:pl-0 sm:pr-4 py-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 block mb-0.5 font-mono">
              TARGET POSITION
            </span>
            <span className="text-sm font-extrabold text-white uppercase block leading-tight">
              APAC Esports<br />Partnership Manager
            </span>
            <span className="text-[10px] font-bold text-cyan-400 mt-1 block tracking-wider font-mono">
              Riot Games Seoul
            </span>
          </div>
        </div>

        {/* 2-Column Balanced Layout - Split 6/6 for pristine height alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN: Core Qualifications & Professional Experience */}
          <div className="md:col-span-6 space-y-5">
            
            {/* Core Qualifications */}
            <div className="bg-[#0f131a] rounded-xl p-4 border border-slate-800">
              <h2 className="text-xs font-black text-white tracking-widest uppercase mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
                <ClipboardCheck className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-display">Core Qualifications</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                {coreQualifications.map((req, idx) => (
                  <div key={idx} className="p-2.5 bg-[#0a0d14] rounded border border-slate-900 flex flex-col justify-between">
                    <h4 className="font-bold text-white leading-tight mb-1">{req.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-normal">
                      {req.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Work Experience */}
            <div className="space-y-3.5">
              <h2 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2 border-b border-slate-800 pb-2">
                <Briefcase className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-display">Professional Experience</span>
              </h2>
              <div className="space-y-3">
                {experience.map((exp, idx) => (
                  <div key={idx} className="text-[11px] p-3.5 rounded-xl border border-slate-800 bg-[#0f131a] shadow-sm">
                    <div className="flex justify-between items-start flex-wrap gap-1 mb-2">
                      <div>
                        <h3 className="font-black text-xs text-white flex items-center gap-1.5 flex-wrap">
                          <span>{exp.company}</span>
                          <span className="text-[10px] text-slate-500 font-normal">({exp.koreanCompany})</span>
                        </h3>
                        <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wide mt-0.5">
                          {exp.role} <span className="text-slate-600 font-normal">|</span> <span className="text-[10px] font-medium text-slate-400 lowercase">({exp.koreanRole})</span>
                        </p>
                      </div>
                      <span className="text-[10px] font-bold bg-[#0a0d14] border border-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[10.5px] leading-relaxed">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>
                          <span className="font-semibold text-white">{bullet.split(':')[0]}:</span>
                          <span>{bullet.substring(bullet.indexOf(':') + 1)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Executive Profile, Core Skillsets, Education, Languages & Tools */}
          <div className="md:col-span-6 space-y-5">
            
            {/* Executive Profile Summary */}
            <div className="border-l-2 border-rose-500 bg-[#0f131a] p-4 rounded-r-xl border border-y-slate-800 border-r-slate-800">
              <h2 className="text-xs font-black text-white tracking-widest uppercase mb-1.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-display">Executive Profile</span>
              </h2>
              <p className="text-[11px] text-slate-300 leading-relaxed text-justify font-medium">
                {summary}
              </p>
            </div>

            {/* Core Skillsets */}
            <div className="bg-[#0f131a] rounded-xl p-4 border border-slate-800">
              <h2 className="text-xs font-black text-white tracking-widest uppercase mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
                <Award className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-display">Core Skillsets</span>
              </h2>
              <div className="space-y-3">
                {skills.map((skillGroup, idx) => (
                  <div key={idx} className="text-[11px]">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-extrabold text-white leading-tight text-[10.5px]">
                        {skillGroup.name.replace(' & ', '/').replace(' Partnership', '')}
                      </span>
                      <span className="text-rose-500 font-bold text-[10px] font-mono">{skillGroup.score}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-950 rounded-full mb-1 overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: `${skillGroup.score}%` }}></div>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-relaxed">
                      {skillGroup.subskills.map(s => s.name).join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-[#0f131a] rounded-xl p-4 border border-slate-800">
              <h2 className="text-xs font-black text-white tracking-widest uppercase mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
                <BookOpen className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-display">Education</span>
              </h2>
              <div className="space-y-2.5">
                {education.map((edu, idx) => {
                  const isHighSchool = edu.institution.toLowerCase().includes('high school');
                  return (
                    <div key={idx} className="text-[11px] text-slate-300 flex justify-between items-start gap-2">
                      <div>
                        <span className="font-extrabold text-white">{edu.institution}</span>
                        <span className="text-[9.5px] text-slate-500 font-normal"> ({edu.koreanInstitution}) </span>
                        <div className="text-slate-400 mt-0.5">
                          {isHighSchool ? 'High School Diploma' : `${edu.degree} (${edu.koreanDegree})`}
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-400 font-mono whitespace-nowrap bg-[#0a0d14] border border-slate-800 px-1.5 py-0.5 rounded">
                        {edu.period.split(' – ').pop() || edu.period}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages & Tools */}
            <div className="bg-[#0f131a] rounded-xl p-4 border border-slate-800">
              <h2 className="text-xs font-black text-white tracking-widest uppercase mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
                <Globe className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-display">Languages & Tools</span>
              </h2>
              <div className="space-y-3 text-[11px] text-slate-300">
                <div>
                  <h4 className="font-extrabold text-white mb-1 font-mono uppercase tracking-wider text-[10px]">Languages:</h4>
                  <ul className="space-y-1 text-[10px] text-slate-400 pl-1">
                    <li>
                      <strong className="text-slate-200">Korean:</strong> Native / Bilingual
                    </li>
                    <li className="leading-snug">
                      <strong className="text-slate-200">English:</strong> Proficient written communication (highly skilled in emails, messaging, proposals, and contracts; comfortable speaking)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-extrabold text-white mb-1 font-mono uppercase tracking-wider text-[10px]">Systems & Tools:</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    MS Office, Slack, Notion, G-Suite, Discord, OBS Studio.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Key Esports Projects - Full Width Section at the Bottom */}
        <div className="mt-6">
          <h2 className="text-xs font-black text-white tracking-widest uppercase flex items-center gap-2 border-b border-slate-800 pb-2 mb-3.5">
            <Trophy className="w-4 h-4 text-rose-500 shrink-0" />
            <span className="font-display">Key Esports Projects</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highImpactProjects.map((p) => (
              <div key={p.id} className="p-3.5 bg-[#0f131a] rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-black text-xs text-white leading-snug">
                      {p.title}
                    </h3>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 whitespace-nowrap font-mono">
                      {p.year}
                    </span>
                  </div>
                  <p className="text-[9.5px] text-slate-400 mb-1.5 font-bold italic">
                    Client / Brand: {p.client}
                  </p>
                  <p className="text-[10.5px] text-slate-300 leading-normal mb-1.5">
                    {p.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 flex items-start gap-1">
                  <span className="text-[9.5px] text-rose-500 font-bold uppercase tracking-wider shrink-0 mt-0.5 font-mono">Key Delivery:</span>
                  <p className="text-[9.5px] text-slate-400 italic leading-snug">
                    {p.keyDeliverables[0]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer Row */}
      <div className="mt-6 border-t border-slate-800/80 pt-4 flex justify-between items-center text-[9px] text-slate-500 font-mono uppercase tracking-widest">
        <p>Ezzy Yang — Esports CV</p>
        <p>Confidential & Professional</p>
      </div>
    </div>
    </div>
  );
}
