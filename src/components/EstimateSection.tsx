import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Info, Mail, Phone, RotateCcw } from 'lucide-react';
import { COMPANY_INFO } from '../data/capitolData';

export interface EstimatePrefill {
  cityOrZip?: string;
  facilityType?: string;
  serviceOption?: string;
  nonce: number;
}

interface EstimateSectionProps {
  prefill: EstimatePrefill;
}

const SERVICE_OPTIONS = [
  'Commercial Cleaning',
  'Janitorial Services',
  'Sanitizing Services',
  'Floor Care',
  'Other / Not Sure',
] as const;

const FREQUENCY_OPTIONS = [
  'Daily',
  'Several Times per Week',
  'Weekly',
  'Customized Schedule',
  'Not Sure Yet',
] as const;

const FACILITY_TYPES = [
  'Corporate Office',
  'Medical Office',
  'Retail Environment',
  'Warehouse / Industrial Facility',
  'Educational Facility',
  'Financial / Community Building',
  'Other Commercial Property',
] as const;

const CONTACT_METHODS = ['Phone', 'Email', 'Either'] as const;

interface FormState {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  preferredContact: string;
  cityOrZip: string;
  facilityType: string;
  squareFootage: string;
  frequency: string;
  requestedServices: string[];
  preferredHours: string;
  specialRequirements: string;
  additionalMessage: string;
}

const INITIAL_FORM_STATE: FormState = {
  fullName: '',
  companyName: '',
  businessEmail: '',
  phoneNumber: '',
  preferredContact: 'Phone',
  cityOrZip: '',
  facilityType: '',
  squareFootage: '',
  frequency: '',
  requestedServices: ['Commercial Cleaning'],
  preferredHours: '',
  specialRequirements: '',
  additionalMessage: '',
};

export function EstimateSection({ prefill }: EstimateSectionProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormState | null>(
    null
  );

  useEffect(() => {
    if (prefill.nonce === 0) return;

    setSubmittedSummary(null);
    setForm((prev) => {
      const next = { ...prev };
      if (prefill.cityOrZip) {
        next.cityOrZip = prefill.cityOrZip;
      }
      if (prefill.facilityType) {
        const matched = FACILITY_TYPES.find((ft) =>
          prefill.facilityType!
            .toLowerCase()
            .includes(ft.split(' ')[0].toLowerCase())
        );
        next.facilityType = matched ?? prefill.facilityType;
      }
      if (prefill.serviceOption) {
        if (!prev.requestedServices.includes(prefill.serviceOption)) {
          next.requestedServices = [
            ...prev.requestedServices,
            prefill.serviceOption,
          ];
        }
      }
      return next;
    });
  }, [prefill]);

  const toggleService = (service: string) => {
    setForm((prev) => {
      const exists = prev.requestedServices.includes(service);
      const updated = exists
        ? prev.requestedServices.filter((s) => s !== service)
        : [...prev.requestedServices, service];
      return { ...prev, requestedServices: updated };
    });
    if (errors.requestedServices) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.requestedServices;
        return copy;
      });
    }
  };

  const updateField = <K extends keyof FormState>(
    field: K,
    value: FormState[K]
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!form.companyName.trim()) {
      nextErrors.companyName = 'Please enter your company or organization name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.businessEmail.trim() || !emailPattern.test(form.businessEmail)) {
      nextErrors.businessEmail = 'Please enter a valid business email address.';
    }
    const digitsCount = form.phoneNumber.replace(/\D/g, '').length;
    if (digitsCount < 7) {
      nextErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!form.cityOrZip.trim()) {
      nextErrors.cityOrZip = 'Please enter your facility city or ZIP code.';
    }
    if (!form.facilityType) {
      nextErrors.facilityType = 'Please select your facility type.';
    }
    if (!form.frequency) {
      nextErrors.frequency = 'Please select a desired cleaning frequency.';
    }
    if (form.requestedServices.length === 0) {
      nextErrors.requestedServices =
        'Please select at least one service category.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedSummary(form);
  };

  const handleReset = () => {
    setSubmittedSummary(null);
    setForm(INITIAL_FORM_STATE);
    setErrors({});
  };

  return (
    <section
      id="estimate"
      className="bg-[#F9F8F4] py-16 sm:py-20 lg:py-24 border-b border-[#14243A]/10"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <p className="text-sm font-medium text-[#1C6659] mb-3">
                Commercial Estimate Request
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-[#14243A] [text-wrap:balance]">
                Request a Customized Cleaning Plan.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#263238]">
                Tell us about your facility so our team can better understand your cleaning needs.
              </p>
            </div>

            <div className="bg-[#EAEDE9] border border-[#14243A]/12 rounded-md p-5 sm:p-6 space-y-3">
              <div className="flex items-start gap-3">
                <Info
                  className="w-5 h-5 text-[#1C6659] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="text-sm leading-relaxed text-[#263238]">
                  <p className="font-semibold text-[#14243A]">
                    Redesign Concept Demonstration
                  </p>
                  <p className="mt-1 text-[#263238]/85">
                    This interactive estimate workflow is part of an independent website redesign concept by S.Mideros Agency. Submitting this demonstration form prepares a local preview only and does not transmit a live request to Capitol Cleaning.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#14243A] text-white rounded-md p-5 sm:p-6 space-y-4">
              <p className="font-display text-xl font-semibold">
                Prefer to Reach Capitol Cleaning Directly?
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                For an active commercial quote or to verify service availability in your area, contact Capitol Cleaning directly by phone or email.
              </p>
              <div className="pt-2 space-y-2.5">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="min-h-[44px] px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-md flex items-center gap-3 text-sm font-semibold text-white transition-colors duration-150 tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C8A66A] shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="min-h-[44px] px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-md flex items-center gap-3 text-sm font-medium text-white transition-colors duration-150 break-all"
                >
                  <Mail className="w-4 h-4 text-[#C8A66A] shrink-0" aria-hidden="true" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-[#14243A]/12 rounded-md p-6 sm:p-8 lg:p-10">
            {submittedSummary ? (
              <div className="space-y-6" role="status" aria-live="polite">
                <div className="flex items-start gap-3.5 pb-6 border-b border-[#14243A]/10">
                  <CheckCircle2
                    className="w-7 h-7 text-[#1C6659] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#1C6659] tracking-wide">
                      Demonstration Preview Complete
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-[#14243A]">
                      Commercial Estimate Summary Prepared
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-[#263238] leading-relaxed">
                      Because this site is an independent redesign concept, no live inquiry was sent to Capitol Cleaning. You can review your facility details below or email them directly to{' '}
                      <a
                        href={`${COMPANY_INFO.emailHref}?subject=${encodeURIComponent(
                          `Commercial Cleaning Estimate Request — ${submittedSummary.companyName}`
                        )}&body=${encodeURIComponent(
                          `Contact: ${submittedSummary.fullName} (${submittedSummary.phoneNumber})\nCompany: ${submittedSummary.companyName}\nLocation: ${submittedSummary.cityOrZip}\nFacility Type: ${submittedSummary.facilityType}\nFrequency: ${submittedSummary.frequency}\nRequested Services: ${submittedSummary.requestedServices.join(', ')}\nApprox. Sq Ft: ${submittedSummary.squareFootage || 'Not specified'}\nPreferred Hours: ${submittedSummary.preferredHours || 'Not specified'}\nSpecial Requirements: ${submittedSummary.specialRequirements || 'None'}\nAdditional Notes: ${submittedSummary.additionalMessage || 'None'}`
                        )}`}
                        className="font-semibold text-[#1C6659] underline underline-offset-4"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <dt className="text-[#263238]/70">Contact &amp; Company</dt>
                    <dd className="mt-0.5 font-semibold text-[#14243A]">
                      {submittedSummary.fullName} · {submittedSummary.companyName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#263238]/70">Email &amp; Phone</dt>
                    <dd className="mt-0.5 font-semibold text-[#14243A] tabular-nums">
                      {submittedSummary.businessEmail} · {submittedSummary.phoneNumber}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#263238]/70">City or ZIP Code</dt>
                    <dd className="mt-0.5 font-semibold text-[#14243A]">
                      {submittedSummary.cityOrZip}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#263238]/70">Facility &amp; Schedule</dt>
                    <dd className="mt-0.5 font-semibold text-[#14243A]">
                      {submittedSummary.facilityType} · {submittedSummary.frequency}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[#263238]/70">Requested Services</dt>
                    <dd className="mt-0.5 font-semibold text-[#14243A]">
                      {submittedSummary.requestedServices.join(', ')}
                    </dd>
                  </div>
                </dl>

                <div className="pt-6 border-t border-[#14243A]/10 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="min-h-[44px] px-5 py-2.5 inline-flex items-center gap-2 text-sm font-semibold text-[#14243A] bg-[#EAEDE9] hover:bg-[#dfe4de] rounded-md transition-colors duration-150 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                    <span>Edit or Start Another Demo Inquiry</span>
                  </button>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="min-h-[44px] px-5 py-2.5 inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 tabular-nums"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Call Capitol Cleaning ({COMPANY_INFO.phoneDisplay})</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#14243A]/10">
                  <h3 className="font-display text-2xl font-semibold text-[#14243A]">
                    Facility &amp; Contact Information
                  </h3>
                  <span className="text-xs text-[#263238]/75">
                    Fields marked with <span className="text-[#1C6659] font-semibold">*</span> are required
                  </span>
                </div>

                <fieldset className="space-y-5">
                  <legend className="text-sm font-semibold text-[#14243A] tracking-wide">
                    01. Contact Information
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="est-full-name"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Full name <span className="text-[#1C6659]">*</span>
                      </label>
                      <input
                        id="est-full-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        placeholder="Jane Miller"
                        aria-invalid={Boolean(errors.fullName)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="est-company"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Company name <span className="text-[#1C6659]">*</span>
                      </label>
                      <input
                        id="est-company"
                        type="text"
                        required
                        autoComplete="organization"
                        value={form.companyName}
                        onChange={(e) =>
                          updateField('companyName', e.target.value)
                        }
                        placeholder="Oklahoma Property Group"
                        aria-invalid={Boolean(errors.companyName)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      />
                      {errors.companyName && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="est-email"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Business email <span className="text-[#1C6659]">*</span>
                      </label>
                      <input
                        id="est-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.businessEmail}
                        onChange={(e) =>
                          updateField('businessEmail', e.target.value)
                        }
                        placeholder="facilities@company.com"
                        aria-invalid={Boolean(errors.businessEmail)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      />
                      {errors.businessEmail && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.businessEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="est-phone"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Phone number <span className="text-[#1C6659]">*</span>
                      </label>
                      <input
                        id="est-phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={form.phoneNumber}
                        onChange={(e) =>
                          updateField('phoneNumber', e.target.value)
                        }
                        placeholder="(405) 555-0140"
                        aria-invalid={Boolean(errors.phoneNumber)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none tabular-nums"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-[#14243A] mb-2">
                      Preferred contact method
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {CONTACT_METHODS.map((method) => {
                        const active = form.preferredContact === method;
                        return (
                          <button
                            key={method}
                            type="button"
                            onClick={() =>
                              updateField('preferredContact', method)
                            }
                            aria-pressed={active}
                            className={`min-h-[40px] px-4 py-2 text-sm font-medium rounded-md border transition-colors duration-150 cursor-pointer ${
                              active
                                ? 'bg-[#14243A] text-white border-[#14243A]'
                                : 'bg-[#F9F8F4] text-[#263238] border-[#14243A]/15 hover:bg-[#EAEDE9]'
                            }`}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </fieldset>

                <fieldset className="pt-6 border-t border-[#14243A]/10 space-y-5">
                  <legend className="text-sm font-semibold text-[#14243A] tracking-wide">
                    02. Facility Details
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="est-city-zip"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        City or ZIP code <span className="text-[#1C6659]">*</span>
                      </label>
                      <input
                        id="est-city-zip"
                        type="text"
                        required
                        value={form.cityOrZip}
                        onChange={(e) => updateField('cityOrZip', e.target.value)}
                        placeholder="Oklahoma City, OK or 73102"
                        aria-invalid={Boolean(errors.cityOrZip)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      />
                      <p className="mt-1 text-xs text-[#263238]/70">
                        Service availability outside core OKC metro communities is confirmed directly by Capitol Cleaning.
                      </p>
                      {errors.cityOrZip && (
                        <p className="mt-1 text-xs font-medium text-red-700">
                          {errors.cityOrZip}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="est-facility-type"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Facility type <span className="text-[#1C6659]">*</span>
                      </label>
                      <select
                        id="est-facility-type"
                        required
                        value={form.facilityType}
                        onChange={(e) =>
                          updateField('facilityType', e.target.value)
                        }
                        aria-invalid={Boolean(errors.facilityType)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      >
                        <option value="">Select facility type</option>
                        {FACILITY_TYPES.map((ft) => (
                          <option key={ft} value={ft}>
                            {ft}
                          </option>
                        ))}
                      </select>
                      {errors.facilityType && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.facilityType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="est-sqft"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Approximate square footage{' '}
                        <span className="text-[#263238]/60 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="est-sqft"
                        type="text"
                        value={form.squareFootage}
                        onChange={(e) =>
                          updateField('squareFootage', e.target.value)
                        }
                        placeholder="e.g., 8,500 sq ft"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none tabular-nums"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="est-frequency"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Desired cleaning frequency{' '}
                        <span className="text-[#1C6659]">*</span>
                      </label>
                      <select
                        id="est-frequency"
                        required
                        value={form.frequency}
                        onChange={(e) => updateField('frequency', e.target.value)}
                        aria-invalid={Boolean(errors.frequency)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      >
                        <option value="">Select desired frequency</option>
                        {FREQUENCY_OPTIONS.map((freq) => (
                          <option key={freq} value={freq}>
                            {freq}
                          </option>
                        ))}
                      </select>
                      {errors.frequency && (
                        <p className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.frequency}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-medium text-[#14243A] mb-2.5">
                      Requested services <span className="text-[#1C6659]">*</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {SERVICE_OPTIONS.map((service) => {
                        const checked =
                          form.requestedServices.includes(service);
                        return (
                          <label
                            key={service}
                            className={`min-h-[44px] px-3.5 py-2.5 rounded-md border text-sm font-medium flex items-center gap-2.5 cursor-pointer transition-colors duration-150 ${
                              checked
                                ? 'bg-[#1C6659]/10 border-[#1C6659] text-[#14243A]'
                                : 'bg-[#F9F8F4] border-[#14243A]/15 text-[#263238] hover:bg-[#EAEDE9]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleService(service)}
                              className="w-4 h-4 accent-[#1C6659] shrink-0"
                            />
                            <span>{service}</span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.requestedServices && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.requestedServices}
                      </p>
                    )}
                  </div>
                </fieldset>

                <fieldset className="pt-6 border-t border-[#14243A]/10 space-y-5">
                  <legend className="text-sm font-semibold text-[#14243A] tracking-wide">
                    03. Additional Details
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="est-hours"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Preferred cleaning hours{' '}
                        <span className="text-[#263238]/60 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="est-hours"
                        type="text"
                        value={form.preferredHours}
                        onChange={(e) =>
                          updateField('preferredHours', e.target.value)
                        }
                        placeholder="e.g., After 6:00 PM or Weekends"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="est-special"
                        className="block text-sm font-medium text-[#14243A] mb-1.5"
                      >
                        Special cleaning requirements{' '}
                        <span className="text-[#263238]/60 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="est-special"
                        type="text"
                        value={form.specialRequirements}
                        onChange={(e) =>
                          updateField('specialRequirements', e.target.value)
                        }
                        placeholder="e.g., VCT strip & wax, storefront glass"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="est-message"
                      className="block text-sm font-medium text-[#14243A] mb-1.5"
                    >
                      Additional message{' '}
                      <span className="text-[#263238]/60 font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="est-message"
                      rows={3}
                      value={form.additionalMessage}
                      onChange={(e) =>
                        updateField('additionalMessage', e.target.value)
                      }
                      placeholder="Share building access notes, number of restrooms, or current priorities..."
                      className="w-full px-3.5 py-2.5 text-sm text-[#14243A] bg-[#F9F8F4] border border-[#14243A]/20 rounded-md focus:bg-white focus:border-[#1C6659] outline-none resize-y"
                    />
                  </div>
                </fieldset>

                <div className="pt-4 border-t border-[#14243A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="min-h-[48px] px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#1C6659] hover:bg-[#144E44] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Request My Commercial Cleaning Estimate
                  </button>
                  <p className="text-xs text-[#263238]/75 max-w-xs leading-relaxed">
                    Demonstration form preview. No automated pricing or guaranteed turnaround is implied.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
