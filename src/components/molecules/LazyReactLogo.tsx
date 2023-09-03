import dynamic from 'next/dynamic'

const ReactLogo = dynamic(() => import('@/components/atoms/ReactLogo'), { ssr: false });

export default function LazyReactLogo() {
  return <ReactLogo />;
}
