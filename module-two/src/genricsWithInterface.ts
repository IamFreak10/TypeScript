interface Devloper<T, X=null> {
  name: string;
  salary: number;
  device: {
    brand: string;

    model: string;
    relesedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface brandChharaWatch {
  heartRate: string;
  stopwatch: boolean;
}
interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  stopwatch: boolean;
  AiFeature: boolean;
}

const poorDdeveloper: Devloper<brandChharaWatch> = {
  name: 'Mahfuj',
  salary: 330,
  device: {
    brand: 'Apple',
    model: 'Iphone 12',
    relesedYear: 2020,
  },
  smartWatch: {
    heartRate: '100 bpm',
    stopwatch: true,
  },
};
const richDeveloper: Devloper<AppleWatch, { brand: string; model: string; relesedYear: number }> = {
  name: 'Rakib',
  salary: 2000,
  device: {
    brand: 'Apple',
    model: 'Iphone 14',
    relesedYear: 2020,
  },
  smartWatch: {
    heartRate: '100 bpm',
    stopwatch: true,
    callSupport: true,
    AiFeature: true,
  },
  bike: {
    brand: 'Hero',
    model: 'Giant',
    relesedYear: 2020,
  },
};
