import type { Category } from './types'

// Kategori dan label cadangan menggunakan Bahasa Indonesia.
export const categories: Category[] = [
  { id: 1, slug: 'eletronicos', name: 'Elektronik', icon: 'package', description: 'Gawai dan perangkat elektronik' },
  { id: 2, slug: 'moda', name: 'Fashion', icon: 'tag', description: 'Pakaian dan aksesori' },
  { id: 3, slug: 'casa', name: 'Rumah & Dekorasi', icon: 'home', description: 'Perlengkapan untuk rumah Anda' },
  { id: 4, slug: 'esportes', name: 'Olahraga', icon: 'zap', description: 'Kebugaran dan aktivitas luar ruang' },
  { id: 5, slug: 'beleza', name: 'Kecantikan', icon: 'star', description: 'Perawatan diri dan kosmetik' },
  { id: 6, slug: 'acessorios', name: 'Aksesori', icon: 'gift', description: 'Pelengkap gaya dan kebutuhan Anda' },
]

export function findCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug)
}
