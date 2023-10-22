export interface Language{
    timestamp:string,
    time:number
    text:string
    detectedLangs:DetectedLanguage[]
}

export interface DetectedLanguage{
  lang:string,
    confidence:number
}
