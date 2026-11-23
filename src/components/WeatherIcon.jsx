import React from 'react';

export default function WeatherIcon({code=0,size=64,className=''}) {
  const cloud = <path d="M19 43h27a13 13 0 0 0 0-26 18 18 0 0 0-34-2A14 14 0 0 0 19 43Z" fill="currentColor" opacity=".92"/>;
  const sun = <g className="icon-sun"><circle cx="34" cy="31" r="12" fill="#FFD77A"/><g stroke="#FFD77A" strokeWidth="3" strokeLinecap="round"><path d="M34 7v6M34 49v6M10 31h6M52 31h6M17 14l4 4M47 44l4 4M51 14l-4 4M21 44l-4 4"/></g></g>;
  let art;
  if(code===0||code===1) art=sun;
  else if(code===2) art=<>{sun}<g transform="translate(7 13) scale(.82)">{cloud}</g></>;
  else if(code===3||code===45||code===48) art=cloud;
  else if(code>=71&&code<=77||code===85||code===86) art=<>{cloud}<g fill="none" stroke="#D9EDFF" strokeWidth="3" strokeLinecap="round"><path d="m22 49-3 5m16-5-3 5m16-5-3 5"/></g></>;
  else if(code>=95) art=<>{cloud}<path d="m36 39-9 14h8l-3 10 14-17h-9l4-7" fill="#FFD36F" stroke="#FFD36F" strokeLinejoin="round"/></>;
  else if(code>=51) art=<>{cloud}<g stroke="#8FC8FF" strokeWidth="3" strokeLinecap="round"><path d="m23 49-3 8m15-8-3 8m15-8-3 8"/></g></>;
  else art=cloud;
  return <svg className={'weather-symbol '+className} width={size} height={size} viewBox="0 0 68 68" role="img" aria-label="Icono meteorológico" xmlns="http://www.w3.org/2000/svg">{art}</svg>;
}