// Create two interfaces MajorCredits and MinorCredits
export interface MajorCredits {
  __brand: "MajorCredits";
  credits: number;
}

export interface MinorCredits {
  __brand: "MinorCredits";
  credits: number;
}

// Create two functions sumMajorCredits and sumMinorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits):
  MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "MajorCredits" };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits):
  MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "MinorCredits" };
}
