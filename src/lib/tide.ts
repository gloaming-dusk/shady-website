// Tide's pictures from the Shady checkout. The site builds against Shady's
// main branch, which may not have Tide yet: then this is null and the pages
// leave Tide out (or say it is coming) instead of failing to build.
type Image = { src: string; width: number; height: number };

const files = import.meta.glob<Image>('@shady/rices/tide/*.jpg', { eager: true, import: 'default' });

const pick = (name: string): Image | undefined =>
  Object.entries(files).find(([path]) => path.endsWith(`/${name}.jpg`))?.[1];

const preview = pick('preview');

export const tide = preview
  ? {
      preview,
      overview: pick('overview'),
      control: pick('control'),
      launcher: pick('launcher'),
      lock: pick('lock')
    }
  : null;
