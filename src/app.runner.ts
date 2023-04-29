import { CommandRunner, RootCommand } from 'nest-commander';

const welcome = () => {
  console.log(
    '     >_>_>_>_>_>_>_>_>_>_>_>_>     >_>_>     >_>_>_>_>_>_>_>_>_>'
  );
  console.log(
    '     >_>_>_>_>_>_>_>_>_>_>_>_>     >_>_>     >_>_>_>_>_>_>_>_>_>_>'
  );
  console.log(
    '     >_>_>                         >_>_>       >_>_>           >_>_>_>'
  );
  console.log(
    '     >_>_>     >_>_>_>_>_>_>_>     >_>_>       >_>_>             >_>_>'
  );
  console.log(
    '     >_>_>     >_>_>_>_>_>_>_>     >_>_>       >_>_>             >_>_>'
  );
  console.log(
    '     >_>_>     >_>_>     >_>_>     >_>_>       >_>_>             >_>_>'
  );
  console.log(
    '     >_>_>     >_>_>     >_>_>     >_>_>       >_>_>             >_>_>'
  );
  console.log(
    '     >_>_>     >_>_>     >_>_>     >_>_>       >_>_>             >_>_>'
  );
  console.log(
    '     >_>_>             >_>_>_>     >_>_>       >_>_>           >_>_>_>'
  );
  console.log(
    '     >_>_>_>_>_>_>_>_>_>_>_>_>     >_>_>     >_>_>_>_>_>_>_>_>_>_>'
  );
  console.log(
    '     >_>_>_>_>_>_>_>_>_>_>_>_>     >_>_>     >_>_>_>_>_>_>_>_>_>'
  );
  console.log(
    '                                                                     '
  );
  console.log(
    '      A decentralized internet hosting service CLI for software      '
  );
  console.log(
    '               development and version control using Git.            '
  );

  return `Read our documentation on our github repository at https://marcjazz/gid.git`;
};

@RootCommand({
  name: 'gid',
  description: welcome(),
  // subCommands:
})
export class AppRunner extends CommandRunner {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async run(passedParam: string[]): Promise<void> {
    //TODO diplay cli version
  }
}
