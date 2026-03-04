import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PlusSignIcon, MinusSignIcon, ArrowDown01Icon, BubbleChatIcon } from 'hugeicons-react'
import Section from '@/components/layout/Section'
import { fadeUp, staggerContainer } from '@/lib/motion'
import { WHATSAPP_NUMBER } from '@/config/site'

interface FAQItemProps {
    question: string
    answer: React.ReactNode
    isOpen: boolean
    onClick: () => void
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    return (
        <div className="border-b border-stone-200/60 last:border-0 overflow-hidden">
            <button
                onClick={onClick}
                className="w-full py-5 flex items-center justify-between text-left group"
            >
                <h4 className={`font-serif text-base md:text-lg transition-colors duration-300 pr-8 ${isOpen ? "text-teak-accent" : "text-charcoal group-hover:text-teak-accent"}`}>
                    {question}
                </h4>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? "border-teak-accent bg-teak-accent text-white" : "border-stone-300 text-stone-400 group-hover:border-teak-accent group-hover:text-teak-accent"}`}>
                    {isOpen ? <MinusSignIcon className="w-3.5 h-3.5" /> : <PlusSignIcon className="w-3.5 h-3.5" />}
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="pb-5 text-stone-600 font-light leading-relaxed text-sm md:text-base pr-4 md:pr-12">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface CategoryData {
    categoryKey: string
    items: { question: string; answer: React.ReactNode }[]
}

function useFAQData(): CategoryData[] {
    const { t } = useTranslation()

    return [
        {
            categoryKey: 'faq.categories.reservation',
            items: [
                { question: t('faq.reservation.q1'), answer: t('faq.reservation.a1') },
                { question: t('faq.reservation.q2'), answer: t('faq.reservation.a2') },
                { question: t('faq.reservation.q3'), answer: t('faq.reservation.a3') },
                { question: t('faq.reservation.q4'), answer: t('faq.reservation.a4') },
            ]
        },
        {
            categoryKey: 'faq.categories.facilities',
            items: [
                { question: t('faq.facilities.q1'), answer: t('faq.facilities.a1') },
                {
                    question: t('faq.facilities.q2'),
                    answer: (
                        <div className="space-y-3">
                            <p>{t('faq.facilities.a2_intro')}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>Villa Cipaku</strong> — {t('faq.facilities.a2_cipaku').replace('Villa Cipaku (One-Bedroom) — ', '')}</li>
                                <li><strong>Villa Birdsong</strong> — {t('faq.facilities.a2_birdsong').replace('Villa Birdsong (Deluxe) — ', '')}</li>
                                <li><strong>Villa Tivoli Garden</strong> — {t('faq.facilities.a2_tivoli').replace('Villa Tivoli Garden (Superior) — ', '')}</li>
                            </ul>
                            <p className="text-stone-500 text-sm italic">{t('faq.facilities.a2_note')}</p>
                        </div>
                    )
                },
                { question: t('faq.facilities.q3'), answer: t('faq.facilities.a3') },
                {
                    question: t('faq.facilities.q4'),
                    answer: (
                        <div className="space-y-3">
                            <p>{t('faq.facilities.a4_intro')}</p>
                            <ul className="list-disc pl-5 space-y-1">
                                {(t('faq.facilities.a4_items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )
                },
                { question: t('faq.facilities.q5'), answer: t('faq.facilities.a5') },
            ]
        },
        {
            categoryKey: 'faq.categories.dining',
            items: [
                { question: t('faq.dining.q1'), answer: t('faq.dining.a1') },
                { question: t('faq.dining.q2'), answer: t('faq.dining.a2') },
                { question: t('faq.dining.q3'), answer: t('faq.dining.a3') },
            ]
        },
        {
            categoryKey: 'faq.categories.policies',
            items: [
                { question: t('faq.policies.q1'), answer: t('faq.policies.a1') },
                { question: t('faq.policies.q2'), answer: t('faq.policies.a2') },
                { question: t('faq.policies.q3'), answer: t('faq.policies.a3') },
            ]
        },
        {
            categoryKey: 'faq.categories.location',
            items: [
                { question: t('faq.location.q1'), answer: t('faq.location.a1') },
                { question: t('faq.location.q2'), answer: t('faq.location.a2') },
                {
                    question: t('faq.location.q3'),
                    answer: (
                        <div className="space-y-4">
                            <p>{t('faq.location.a3_intro')}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                {(t('faq.location.a3_items', { returnObjects: true }) as string[]).map((item, i) => (
                                    <li key={i}><strong>{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}</li>
                                ))}
                            </ul>
                        </div>
                    )
                },
            ]
        }
    ]
}

interface CategoryGroupProps {
    category: string
    items: { question: string; answer: React.ReactNode }[]
    isExpanded: boolean
    onToggleCategory: () => void
    openItemId: string
    onToggleItem: (id: string) => void
    groupIdx: number
}

function CategoryGroup({ category, items, isExpanded, onToggleCategory, openItemId, onToggleItem, groupIdx }: CategoryGroupProps) {
    return (
        <motion.div variants={fadeUp} className="border-b border-stone-100 last:border-0">
            <button
                onClick={onToggleCategory}
                className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
            >
                <h3 className={`text-xs md:text-sm tracking-[0.15em] font-semibold uppercase flex items-center gap-3 md:gap-4 transition-colors duration-300 ${isExpanded ? 'text-teak-accent' : 'text-stone-400 group-hover:text-charcoal'}`}>
                    <span className={`w-6 md:w-8 h-px transition-colors duration-300 ${isExpanded ? 'bg-teak-accent' : 'bg-stone-200'}`} />
                    {category}
                    <span className="text-[10px] font-normal tracking-normal text-stone-300 ml-1">
                        ({items.length})
                    </span>
                </h3>
                <ArrowDown01Icon className={`w-4 h-4 text-stone-400 transition-all duration-300 ${isExpanded ? 'rotate-180 text-teak-accent' : 'group-hover:text-charcoal'}`} />
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                        <div className="pl-4 md:pl-12 pb-4">
                            {items.map((item, itemIdx) => {
                                const id = `${groupIdx}-${itemIdx}`
                                return (
                                    <FAQItem
                                        key={id}
                                        question={item.question}
                                        answer={item.answer}
                                        isOpen={openItemId === id}
                                        onClick={() => onToggleItem(id)}
                                    />
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    const { t } = useTranslation()
    const faqData = useFAQData()
    const [expandedCategory, setExpandedCategory] = useState<number>(0)
    const [openItemId, setOpenItemId] = useState<string>("0-0")

    const handleToggleCategory = (idx: number) => {
        if (expandedCategory === idx) {
            setExpandedCategory(-1)
            setOpenItemId("")
        } else {
            setExpandedCategory(idx)
            setOpenItemId(`${idx}-0`)
        }
    }

    const handleToggleItem = (id: string) => {
        setOpenItemId(openItemId === id ? "" : id)
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('faq.ctaMessage'))}`

    return (
        <Section id="faq" className="bg-sand relative overflow-hidden py-20 md:py-28 lg:py-32">
            <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={staggerContainer(0.12)}
                    className="text-center mb-12 md:mb-16"
                >
                    <motion.span variants={fadeUp} className="text-teak-accent text-xs tracking-[0.25em] uppercase font-semibold mb-6 block">
                        {t('faq.eyebrow')}
                    </motion.span>
                    <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
                        {t('faq.title')} <span className="italic text-stone-500">{t('faq.titleAccent')}</span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={staggerContainer(0.1)}
                    className="bg-white p-5 md:p-10 shadow-xl shadow-stone-300/20 rounded-sm border border-stone-100"
                >
                    {faqData.map((group, groupIdx) => (
                        <CategoryGroup
                            key={groupIdx}
                            category={t(group.categoryKey)}
                            items={group.items}
                            isExpanded={expandedCategory === groupIdx}
                            onToggleCategory={() => handleToggleCategory(groupIdx)}
                            openItemId={openItemId}
                            onToggleItem={handleToggleItem}
                            groupIdx={groupIdx}
                        />
                    ))}
                </motion.div>

                {/* WhatsApp CTA */}
                <motion.div
                    initial="hidden" whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-10 md:mt-12 text-center"
                >
                    <p className="text-stone-500 font-light mb-6">
                        {t('faq.ctaText')}
                    </p>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-teak-accent transition-all duration-500 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                    >
                        <BubbleChatIcon className="w-4 h-4" />
                        <span>{t('faq.ctaButton')}</span>
                    </a>
                </motion.div>
            </div>
        </Section>
    )
}
