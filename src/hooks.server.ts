import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { prepareStylesSSR } from '@svelteuidev/core';
const handleParaglide: Handle = i18n.handle();
import { sequence } from '@sveltejs/kit/hooks';
export const handle = sequence(handleParaglide, prepareStylesSSR);