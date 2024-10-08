import { SystemUserProxy } from './system-user/system-user-proxy';

async function cliente(): Promise<void> {
  const user = new SystemUserProxy('Luiz', 'matheusCoutinho');
  console.log('Isso vai levar 2 segundos');
  console.log(await user.getAddresses());
  console.log('Isso vai se repetir (CACHE)');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

cliente();
