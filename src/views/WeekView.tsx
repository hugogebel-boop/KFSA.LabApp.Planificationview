import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'
import { Badge } from '@/ui/badge'
import { CalendarDays } from 'lucide-react'

type Row = { id:string, affaire:string, ech:string, test:string, date?:string, resource?:string }
const DATA: Row[] = [
    { id: '1', affaire: '15572', ech: 'E-01', test: 'TRX — CU/CD', status: 'a_faire' },
    { id: '2', affaire: '15574', ech: 'E-03', test: 'TRX — CU/CD', status: 'a_faire' },
    { id: '3', affaire: '15579', ech: 'E-02', test: 'EL22 — Méthylène Blue', status: 'encours', resource: 'TRX-01', date: '2025-05-21' },
    { id: '4', affaire: '15571', ech: 'E-09', test: 'EL04 — Cendres', status: 'termine', resource: 'Tamiseuse-01', date: '2025-05-21' },
    { id: '5', affaire: '15575', ech: 'E-01', test: 'EL02 — Bleu', status: 'encours', resource: 'TRX-01', date: '2025-05-17' },
    { id: '6', affaire: '15572', ech: 'E-02', test: 'EL09 — Type 1', status: 'a_faire' },
    { id: '7', affaire: '15576', ech: 'E-10', test: 'EL05 — Casagrande', status: 'termine', resource: 'Compacteur-02', date: '2025-05-18' },
    { id: '8', affaire: '15572', ech: 'E-09', test: 'EL05 — Casagrande', status: 'termine', resource: 'Four-01', date: '2025-05-15' },
    { id: '9', affaire: '15572', ech: 'E-01', test: 'EL60 — Autre', status: 'a_faire' },
    { id: '10', affaire: '15575', ech: 'E-02', test: 'EL04 — Cendres', status: 'termine', resource: 'Tamiseuse-01', date: '2025-05-17' },
    { id: '11', affaire: '15573', ech: 'E-06', test: 'EL08 — Perte au Feu', status: 'a_faire' },
    { id: '12', affaire: '15575', ech: 'E-12', test: 'EL60 — Autre', status: 'encours', resource: 'TRX-01', date: '2025-05-15' },
    { id: '13', affaire: '15573', ech: 'E-08', test: 'EL09 — Type 1', status: 'a_faire' },
    { id: '14', affaire: '15579', ech: 'E-04', test: 'EL60 — Autre', status: 'a_faire' },
    { id: '15', affaire: '15571', ech: 'E-04', test: 'EL00 — Prépa', status: 'termine', resource: 'Oedo-01', date: '2025-05-21' },
    { id: '16', affaire: '15576', ech: 'E-04', test: 'EL60 — Autre', status: 'encours', date: '2025-05-14' },
    { id: '17', affaire: '15575', ech: 'E-03', test: 'EL04 — Cendres', status: 'termine', resource: 'Banc-Prep', date: '2025-05-21' },
    { id: '18', affaire: '15577', ech: 'E-06', test: 'EL04 — Cendres', status: 'valide', resource: 'Tamiseuse-01', date: '2025-05-12' },
    { id: '19', affaire: '15572', ech: 'E-03', test: 'EL60 — Autre', status: 'a_faire' },
    { id: '20', affaire: '15577', ech: 'E-10', test: 'EL01 — Limites Atterberg', status: 'a_faire' },
    { id: '21', affaire: '15578', ech: 'E-09', test: 'EL05 — Casagrande', status: 'valide', date: '2025-05-13' },
    { id: '22', affaire: '15579', ech: 'E-05', test: 'EL60 — Autre', status: 'a_faire' },
    { id: '23', affaire: '15575', ech: 'E-07', test: 'EL02 — Bleu', status: 'encours' },
    { id: '24', affaire: '15575', ech: 'E-09', test: 'EL02 — Bleu', status: 'encours', resource: 'Banc-Prep', date: '2025-05-22' },
    { id: '25', affaire: '15579', ech: 'E-10', test: 'EL04 — Cendres', status: 'a_faire' },
    { id: '26', affaire: '15573', ech: 'E-09', test: 'EL14 — Granulo', status: 'valide', resource: 'Tamiseuse-01', date: '2025-05-17' },
    { id: '27', affaire: '15575', ech: 'E-04', test: 'EL00 — Prépa', status: 'a_faire' },
    { id: '28', affaire: '15572', ech: 'E-02', test: 'TRX — CU/CD', status: 'encours', resource: 'Four-01', date: '2025-05-14' },
    { id: '29', affaire: '15573', ech: 'E-11', test: 'EL09 — Type 2', status: 'valide', resource: 'Compacteur-02' },
    { id: '30', affaire: '15577', ech: 'E-04', test: 'EL14 — Granulo', status: 'termine', resource: 'Banc-Prep', date: '2025-05-22' },
    { id: '31', affaire: '15576', ech: 'E-08', test: 'EL14 — Granulo', status: 'encours', resource: 'Oedo-01', date: '2025-05-21' },
    { id: '32', affaire: '15579', ech: 'E-04', test: 'EL22 — Méthylène Blue', status: 'a_faire' },
    { id: '33', affaire: '15572', ech: 'E-12', test: 'EL60 — Autre', status: 'a_faire' },
    { id: '34', affaire: '15572', ech: 'E-01', test: 'EL08 — Perte au Feu', status: 'a_faire' },
    { id: '35', affaire: '15574', ech: 'E-05', test: 'EL60 — Autre', status: 'encours', resource: 'Banc-Prep' },
    { id: '36', affaire: '15578', ech: 'E-04', test: 'EL09 — Type 2', status: 'termine', resource: 'Oedo-01', date: '2025-05-17' },
    { id: '37', affaire: '15577', ech: 'E-07', test: 'EL09 — Type 2', status: 'termine', resource: 'Banc-Prep' },
    { id: '38', affaire: '15572', ech: 'E-01', test: 'EL09 — Type 1', status: 'termine', resource: 'Oedo-01', date: '2025-05-15' },
    { id: '39', affaire: '15579', ech: 'E-08', test: 'EL02 — Bleu', status: 'encours', resource: 'TRX-01' },
    { id: '40', affaire: '15572', ech: 'E-08', test: 'EL14 — Granulo', status: 'a_faire' },
    { id: '41', affaire: '15579', ech: 'E-01', test: 'EL01 — Limites Atterberg', status: 'valide', resource: 'TRX-01', date: '2025-05-19' },
    { id: '42', affaire: '15574', ech: 'E-07', test: 'EL00 — Prépa', status: 'a_faire' },
    { id: '43', affaire: '15571', ech: 'E-07', test: 'EL05 — Casagrande', status: 'valide', resource: 'TRX-02', date: '2025-05-20' },
    { id: '44', affaire: '15578', ech: 'E-03', test: 'EL04 — Cendres', status: 'a_faire' },
    { id: '45', affaire: '15571', ech: 'E-10', test: 'TRX — CU/CD', status: 'encours', resource: 'Oedo-01', date: '2025-05-19' },
    { id: '46', affaire: '15579', ech: 'E-09', test: 'EL02 — Bleu', status: 'a_faire' },
    { id: '47', affaire: '15579', ech: 'E-02', test: 'EL02 — Bleu', status: 'a_faire' },
    { id: '48', affaire: '15572', ech: 'E-11', test: 'EL04 — Cendres', status: 'encours', date: '2025-05-21' },
    { id: '49', affaire: '15571', ech: 'E-10', test: 'EL01 — Limites Atterberg', status: 'encours', resource: 'Compacteur-02', date: '2025-05-16' },
    { id: '50', affaire: '15574', ech: 'E-11', test: 'TRX — CU/CD', status: 'a_faire' },
    { id: '51', affaire: '15575', ech: 'E-07', test: 'EL02 — Bleu', status: 'encours', resource: 'TRX-02' },
    { id: '52', affaire: '15572', ech: 'E-01', test: 'EL09 — Type 2', status: 'encours', resource: 'Oedo-01', date: '2025-05-15' },
    { id: '53', affaire: '15579', ech: 'E-05', test: 'EL02 — Bleu', status: 'valide' },
    { id: '54', affaire: '15576', ech: 'E-05', test: 'EL02 — Bleu', status: 'encours', resource: 'TRX-02', date: '2025-05-22' },
    { id: '55', affaire: '15579', ech: 'E-01', test: 'EL60 — Autre', status: 'termine', resource: 'Banc-Prep', date: '2025-05-14' },
    { id: '56', affaire: '15575', ech: 'E-02', test: 'EL01 — Limites Atterberg', status: 'termine', resource: 'TRX-02', date: '2025-05-17' },
    { id: '57', affaire: '15574', ech: 'E-11', test: 'EL60 — Autre', status: 'termine', resource: 'TRX-02' },
    { id: '58', affaire: '15571', ech: 'E-02', test: 'EL60 — Autre', status: 'encours', resource: 'Oedo-01', date: '2025-05-14' },
    { id: '59', affaire: '15575', ech: 'E-03', test: 'TRX — CU/CD', status: 'encours', resource: 'Compacteur-02', date: '2025-05-13' },
    { id: '60', affaire: '15573', ech: 'E-09', test: 'EL00 — Prépa', status: 'termine', resource: 'TRX-01', date: '2025-05-12' },
    { id: '61', affaire: '15575', ech: 'E-06', test: 'EL00 — Prépa', status: 'termine', resource: 'TRX-01', date: '2025-05-17' },
    { id: '62', affaire: '15579', ech: 'E-07', test: 'EL22 — Méthylène Blue', status: 'termine', date: '2025-05-14' },
    { id: '63', affaire: '15573', ech: 'E-07', test: 'EL00 — Prépa', status: 'a_faire' },
    { id: '64', affaire: '15576', ech: 'E-07', test: 'EL60 — Autre', status: 'termine', resource: 'TRX-02', date: '2025-05-13' },
    { id: '65', affaire: '15577', ech: 'E-01', test: 'EL09 — Type 2', status: 'a_faire' },
    { id: '66', affaire: '15578', ech: 'E-06', test: 'EL05 — Casagrande', status: 'termine', date: '2025-05-22' },
    { id: '67', affaire: '15574', ech: 'E-07', test: 'EL08 — Perte au Feu', status: 'a_faire' },
    { id: '68', affaire: '15572', ech: 'E-05', test: 'EL08 — Perte au Feu', status: 'encours', resource: 'Four-01', date: '2025-05-12' },
    { id: '69', affaire: '15572', ech: 'E-05', test: 'EL02 — Bleu', status: 'encours', date: '2025-05-21' },
    { id: '70', affaire: '15577', ech: 'E-06', test: 'TRX — CU/CD', status: 'termine', resource: 'Compacteur-02', date: '2025-05-21' },
    { id: '71', affaire: '15574', ech: 'E-05', test: 'EL00 — Prépa', status: 'termine', resource: 'Four-01', date: '2025-05-22' },
    { id: '72', affaire: '15574', ech: 'E-06', test: 'EL09 — Type 1', status: 'a_faire' },
    { id: '73', affaire: '15576', ech: 'E-10', test: 'EL08 — Perte au Feu', status: 'encours', resource: 'TRX-02', date: '2025-05-22' },
    { id: '74', affaire: '15577', ech: 'E-06', test: 'EL09 — Type 1', status: 'encours', resource: 'TRX-01', date: '2025-05-18' },
    { id: '75', affaire: '15573', ech: 'E-10', test: 'EL22 — Méthylène Blue', status: 'a_faire' },
    { id: '76', affaire: '15579', ech: 'E-01', test: 'EL05 — Casagrande', status: 'a_faire' },
    { id: '77', affaire: '15577', ech: 'E-10', test: 'EL22 — Méthylène Blue', status: 'encours', resource: 'Tamiseuse-01', date: '2025-05-20' },
    { id: '78', affaire: '15578', ech: 'E-12', test: 'EL02 — Bleu', status: 'encours', resource: 'Banc-Prep', date: '2025-05-17' },
    { id: '79', affaire: '15572', ech: 'E-04', test: 'EL60 — Autre', status: 'a_faire' },
    { id: '80', affaire: '15574', ech: 'E-03', test: 'EL00 — Prépa', status: 'a_faire' },
    { id: '81', affaire: '15578', ech: 'E-10', test: 'EL01 — Limites Atterberg', status: 'encours', date: '2025-05-18' },
    { id: '82', affaire: '15578', ech: 'E-07', test: 'EL04 — Cendres', status: 'a_faire' },
    { id: '83', affaire: '15571', ech: 'E-02', test: 'EL09 — Type 1', status: 'a_faire' },
    { id: '84', affaire: '15579', ech: 'E-08', test: 'EL00 — Prépa', status: 'encours', date: '2025-05-14' },
    { id: '85', affaire: '15578', ech: 'E-11', test: 'EL14 — Granulo', status: 'valide', resource: 'Four-01' },
    { id: '86', affaire: '15579', ech: 'E-07', test: 'EL14 — Granulo', status: 'encours', resource: 'Four-01', date: '2025-05-16' },
    { id: '87', affaire: '15574', ech: 'E-11', test: 'EL05 — Casagrande', status: 'termine', resource: 'Banc-Prep', date: '2025-05-19' },
    { id: '88', affaire: '15572', ech: 'E-12', test: 'EL05 — Casagrande', status: 'a_faire' },
    { id: '89', affaire: '15576', ech: 'E-06', test: 'EL14 — Granulo', status: 'a_faire' },
    { id: '90', affaire: '15573', ech: 'E-04', test: 'EL09 — Type 1', status: 'encours', resource: 'Oedo-01', date: '2025-05-17' },
    { id: '91', affaire: '15579', ech: 'E-08', test: 'EL09 — Type 1', status: 'a_faire' },
    { id: '92', affaire: '15577', ech: 'E-07', test: 'EL22 — Méthylène Blue', status: 'valide', resource: 'Four-01', date: '2025-05-19' },
    { id: '93', affaire: '15571', ech: 'E-06', test: 'EL05 — Casagrande', status: 'termine' },
    { id: '94', affaire: '15577', ech: 'E-09', test: 'TRX — CU/CD', status: 'termine', resource: 'TRX-01', date: '2025-05-16' },
    { id: '95', affaire: '15577', ech: 'E-08', test: 'EL00 — Prépa', status: 'a_faire' },
    { id: '96', affaire: '15577', ech: 'E-12', test: 'EL02 — Bleu', status: 'termine' },
    { id: '97', affaire: '15579', ech: 'E-01', test: 'EL09 — Type 1', status: 'encours', resource: 'Oedo-01', date: '2025-05-14' },
    { id: '98', affaire: '15578', ech: 'E-03', test: 'EL00 — Prépa', status: 'a_faire' },
    { id: '99', affaire: '15576', ech: 'E-04', test: 'EL09 — Type 2', status: 'a_faire' },
    { id: '100', affaire: '15577', ech: 'E-05', test: 'EL09 — Type 1', status: 'a_faire' },
]

export function WeekView(){
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          <CalendarDays className="h-4 w-4 text-emerald-700"/> Semaine (aperçu)
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {DATA.map(r => (
          <div key={r.id} className="rounded-xl border border-emerald-100 bg-white/80 p-3">
            <div className="mb-2 text-sm font-semibold text-emerald-950">{r.date}</div>
            <div className="font-medium text-emerald-900">{r.test}</div>
            <div className="mt-1 flex flex-wrap gap-2 text-xs text-emerald-900/80">
              <Badge variant="outline">Aff. {r.affaire}</Badge>
              <Badge variant="outline">Éch. {r.ech}</Badge>
              {r.resource && <Badge variant="outline">{r.resource}</Badge>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}