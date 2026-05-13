import { useEffect } from 'react';
import { listenKonami } from '../../lib/konami';
import { play } from '../../lib/sfx';

const fallbackSecretPath = `${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/secret`;

interface Props {
  secretPath?: string;
}

export default function KonamiListener({ secretPath = fallbackSecretPath }: Props) {
  useEffect(() => {
    const off = listenKonami(() => {
      play('levelup');
      window.location.href = secretPath;
    });
    return off;
  }, [secretPath]);
  return null;
}
