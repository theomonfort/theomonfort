import { useEffect } from 'react';
import { listenKonami } from '../../lib/konami';
import { play } from '../../lib/sfx';

export default function KonamiListener() {
  useEffect(() => {
    const off = listenKonami(() => {
      play('levelup');
      window.location.href = '/theomonfort/secret';
    });
    return off;
  }, []);
  return null;
}
