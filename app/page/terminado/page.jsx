import dynamic from 'next/dynamic'

const TerminadoClient = dynamic(() => import('./TerminadoClient'), { ssr: false })

export default function TerminadoPage() {
    return <TerminadoClient />
}
