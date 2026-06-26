// Opera Obscura bibliography — entry data, split by type (per-type files are the source).
// FORMATTING note: RegEx for capitals separated by periods + space: [A-Z]\. [A-Z]\.

import { letters } from './letters';
import { prose } from './prose';
import { poems } from './poems';
import { annotations } from './annotations';
import { diaries } from './diaries';
import { blurbs } from './blurbs';

export const texts = [...letters, ...prose, ...poems, ...annotations, ...diaries, ...blurbs];
