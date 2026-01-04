// আমি রিয়েল আইডিয়া পাবো না,
// idea
// implementation later
/* 
1.Interface
2.Abstraction class
*/
interface mediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}
// implementation
class MusicPlayer implements mediaPlayer {
  play(): void {
    console.log('playing music');
  }
  pause(): void {
    console.log('pausing music');
  }
  stop(): void {
    console.log('stopping music');
  }
}
// const musicPlayer = new MusicPlayer();
// musicPlayer.play();
abstract class MediaPlayerABC {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
class mediaPlayerIMP extends MediaPlayerABC {
  play(): void {
    console.log('playing music');
  }
  pause(): void {
    console.log('pausing music');
  }
  stop(): void {
    console.log('stopping music');
  }
}