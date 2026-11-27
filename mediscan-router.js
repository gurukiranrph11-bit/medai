/**
 * MediScan AI - Cross-Screen Clinical Navigation & Workflow Router
 * Clinical navigation and workflow router for MediScan AI.
 */

(function () {
  const ROUTES = {
    'dashboard': '../main_dashboard_mediscan_ai_1/code.html',
    'dashboard-1': '../main_dashboard_mediscan_ai_1/code.html',
    'dashboard-2': '../main_dashboard_mediscan_ai_2/code.html',
    'dashboard-3': '../main_dashboard_mediscan_ai_3/code.html',
    'upload-scan': '../upload_medical_scan_mediscan_ai/code.html',
    'ai-analysis': '../ai_image_analysis_mediscan_ai/code.html',
    'ai-analysis-tablet-1': '../ai_image_analysis_tablet_mediscan_ai_1/code.html',
    'ai-analysis-tablet-2': '../ai_image_analysis_tablet_mediscan_ai_2/code.html',
    'ai-analysis-tablet-3': '../ai_image_analysis_tablet_mediscan_ai_3/code.html',
    'ai-analysis-tablet-4': '../ai_image_analysis_tablet_mediscan_ai_4/code.html',
    'clinical-datasets': '../clinical_dataset_analysis_mediscan_ai/code.html',
    'patients': '../patient_management_mediscan_ai/code.html',
    'case-details': '../case_details_pt_20481_mediscan_ai/code.html',
    'risk-prioritization': '../risk_prioritization_board_mediscan_ai_1/code.html',
    'risk-prioritization-2': '../risk_prioritization_board_mediscan_ai_2/code.html',
    'reports': '../medical_reports_mediscan_ai/code.html',
    'notifications': '../notifications_mediscan_ai/code.html',
    'settings-profile': '../user_profile_settings_mediscan_ai/code.html',
    'login': '../login_registration_mediscan_ai/code.html',
    'hub': '../index.html'
  };

  const SCREEN_TITLES = {
    'login_registration_mediscan_ai': 'Authentication & Clinical Access',
    'main_dashboard_mediscan_ai_1': 'Executive Clinical Dashboard (V1)',
    'main_dashboard_mediscan_ai_2': 'Executive Clinical Dashboard (V2)',
    'main_dashboard_mediscan_ai_3': 'Executive Clinical Dashboard (V3)',
    'upload_medical_scan_mediscan_ai': 'DICOM & Scan Ingestion',
    'ai_image_analysis_mediscan_ai': 'AI Image CADe / CADx Viewer',
    'ai_image_analysis_tablet_mediscan_ai_1': 'AI Image Viewer (Tablet V1)',
    'ai_image_analysis_tablet_mediscan_ai_2': 'AI Image Viewer (Tablet V2)',
    'ai_image_analysis_tablet_mediscan_ai_3': 'AI Image Viewer (Tablet V3)',
    'ai_image_analysis_tablet_mediscan_ai_4': 'AI Image Viewer (Tablet V4)',
    'clinical_dataset_analysis_mediscan_ai': 'Population Health & Datasets',
    'patient_management_mediscan_ai': 'Patient Registry & Directory',
    'case_details_pt_20481_mediscan_ai': 'Case Details (PT-20481)',
    'risk_prioritization_board_mediscan_ai_1': 'Triage Risk Board (Kanban V1)',
    'risk_prioritization_board_mediscan_ai_2': 'Triage Risk Board (Kanban V2)',
    'medical_reports_mediscan_ai': 'Verified Medical Reports',
    'notifications_mediscan_ai': 'Clinical Alert Center',
    'user_profile_settings_mediscan_ai': 'Clinician Profile & Security'
  };

  function getCurrentFolder() {
    const parts = window.location.pathname.replace(/\\/g, '/').split('/');
    for (let i = parts.length - 1; i >= 0; i--) {
      if (parts[i] && parts[i] !== 'code.html' && parts[i] !== 'index.html') {
        return parts[i];
      }
    }
    return '';
  }

  const currentFolder = getCurrentFolder();
  const currentTitle = SCREEN_TITLES[currentFolder] || 'MediScan Screen';

  // Ensure high-definition typography is active
  if (!document.querySelector('link[href*="typography.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = currentFolder ? '../typography.css' : 'typography.css';
    document.head.appendChild(link);
  }

  // Inform parent hub (if embedded in index.html)
  if (window.parent && window.parent !== window && currentFolder) {
    try {
      window.parent.postMessage({ type: 'MEDISCAN_PAGE_CHANGED', folder: currentFolder }, '*');
    } catch (e) {}
  }

  // Shared Toast & Confirmation Modal Helper (Indigo + Orange Theme)
  const MediScanUI = {
    toast: function (message, type = 'success') {
      let container = document.getElementById('mediscan-toast-container');
      if (!container) {
        container = document.createElement('div');
        container.id = 'mediscan-toast-container';
        container.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:9998;display:flex;flex-direction:column;gap:8px;max-width:380px;pointer-events:none;font-family:Inter,sans-serif;';
        document.body.appendChild(container);
      }
      const colors = {
        success: { bg: '#312E81', border: '#F97316', icon: 'check_circle', iconColor: '#FDBA74' },
        info: { bg: '#1E1B4B', border: '#818CF8', icon: 'info', iconColor: '#C7D2FE' },
        warning: { bg: '#C2410C', border: '#F97316', icon: 'warning', iconColor: '#FFEDD5' },
        error: { bg: '#991B1B', border: '#DC4444', icon: 'error', iconColor: '#FEE2E2' }
      };
      const c = colors[type] || colors.success;
      const el = document.createElement('div');
      el.style.cssText = `pointer-events:auto;display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:12px;background:${c.bg};color:#FFFFFF;border-left:4px solid ${c.border};box-shadow:0 10px 25px rgba(30,27,75,0.28);font-size:13px;font-weight:500;opacity:0;transform:translateY(8px);transition:all 0.2s ease;`;
      el.innerHTML = `<span class="material-symbols-outlined" style="font-size:20px;color:${c.iconColor};flex-shrink:0;">${c.icon}</span><span style="flex:1;line-height:1.35;"></span><button type="button" style="background:none;border:none;color:#C7D2FE;cursor:pointer;font-size:16px;padding:0 2px;" aria-label="Close">&times;</button>`;
      el.querySelector('span:nth-child(2)').textContent = message;
      el.querySelector('button').onclick = () => el.remove();
      container.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(8px)';
        setTimeout(() => el.remove(), 220);
      }, 3200);
    },
    confirm: function ({ title = 'Confirm Action', message = 'Are you sure you want to proceed?', confirmText = 'Confirm', cancelText = 'Cancel', onConfirm }) {
      let modal = document.getElementById('mediscan-confirm-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'mediscan-confirm-modal';
        modal.style.cssText = 'position:fixed;inset:0;background:rgba(30,27,75,0.62);backdrop-filter:blur(4px);z-index:9999;display:none;align-items:center;justify-content:center;padding:16px;font-family:Inter,sans-serif;';
        modal.innerHTML = `
          <div style="background:#FFFFFF;border:1px solid #E4E2F5;border-radius:16px;max-width:440px;width:100%;padding:24px;box-shadow:0 20px 50px rgba(30,27,75,0.25);color:#1E1B4B;">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
              <div style="width:40px;height:40px;border-radius:10px;background:#FFEDD5;color:#C2410C;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <span class="material-symbols-outlined" style="font-size:22px;">verified_user</span>
              </div>
              <h3 id="ms-confirm-title" style="margin:0;font-size:17px;font-weight:700;color:#312E81;"></h3>
            </div>
            <p id="ms-confirm-msg" style="margin:0 0 20px 0;font-size:14px;line-height:1.5;color:#43474D;"></p>
            <div style="display:flex;justify-content:flex-end;gap:10px;">
              <button id="ms-confirm-cancel" type="button" style="padding:9px 16px;border-radius:8px;border:1px solid #E4E2F5;background:#F8F7FF;color:#1E1B4B;font-size:13px;font-weight:600;cursor:pointer;"></button>
              <button id="ms-confirm-ok" type="button" style="padding:9px 18px;border-radius:8px;border:none;background:#312E81;color:#FFFFFF;font-size:13px;font-weight:600;cursor:pointer;"></button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
      }
      modal.querySelector('#ms-confirm-title').textContent = title;
      modal.querySelector('#ms-confirm-msg').textContent = message;
      const cancelBtn = modal.querySelector('#ms-confirm-cancel');
      const okBtn = modal.querySelector('#ms-confirm-ok');
      cancelBtn.textContent = cancelText;
      okBtn.textContent = confirmText;
      modal.style.display = 'flex';
      cancelBtn.onclick = () => { modal.style.display = 'none'; };
      okBtn.onclick = () => {
        modal.style.display = 'none';
        if (typeof onConfirm === 'function') onConfirm();
      };
    }
  };
  window.MediScanUI = MediScanUI;

  function showAdminNotice() {
    let modal = document.getElementById('mediscan-admin-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'mediscan-admin-modal';
      modal.className = 'fixed inset-0 bg-primary/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4';
      modal.innerHTML = `
        <div class="bg-surface-card rounded-2xl max-w-md w-full p-6 shadow-2xl border border-border-subtle flex flex-col gap-4 text-on-surface">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-priority-high-soft flex items-center justify-center text-priority-high font-bold">
              <span class="material-symbols-outlined text-2xl">admin_panel_settings</span>
            </div>
            <div>
              <h3 class="font-headline-sm text-headline-sm text-primary">Governance Restricted</h3>
              <p class="text-xs text-on-surface-variant font-label-code">HIPAA / PACS Security Policy</p>
            </div>
          </div>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            The <strong>Admin & Governance Console</strong> is restricted to hospital PACS system administrators and designated clinical data protection officers (DPO). Role <code>Lead Radiologist</code> is currently in clinical review mode.
          </p>
          <div class="p-3 rounded-lg bg-surface-container-low text-xs font-label-code text-on-surface space-y-1">
            <div>Audit Status: <span class="text-priority-low font-bold">Logged & Signed</span></div>
            <div>Active Session: <span class="font-bold">Dr. A. Mehta (Rad-ID: 48190)</span></div>
          </div>
          <div class="flex justify-end gap-2 mt-2">
            <button onclick="document.getElementById('mediscan-admin-modal').style.display='none'" class="px-4 py-2 rounded-lg bg-primary-container text-white text-sm font-semibold hover:bg-primary transition-colors">
              Return to Clinical Workspace
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
  }

  // Intercept Navigation
  document.addEventListener('click', function (e) {
    // 1. Check data-path links (Sidebar)
    const pathTarget = e.target.closest('[data-path]');
    if (pathTarget) {
      e.preventDefault();
      const path = pathTarget.getAttribute('data-path');
      if (path === 'admin') {
        showAdminNotice();
        return;
      }
      if (ROUTES[path]) {
        window.location.href = ROUTES[path];
        return;
      }
    }

    // 2. Header elements (Logo, Bell, Avatar)
    const headerLogo = e.target.closest('header .font-headline-sm, header img[alt*="Logo"], header [class*="MediScan"]');
    if (headerLogo) {
      e.preventDefault();
      if (!currentFolder.startsWith('main_dashboard')) {
        window.location.href = ROUTES['dashboard'];
      }
      return;
    }

    const headerBell = e.target.closest('header button');
    if (headerBell && (headerBell.querySelector('.material-symbols-outlined')?.textContent.trim() === 'notifications' || headerBell.innerHTML.includes('notifications'))) {
      if (!currentFolder.includes('notifications')) {
        e.preventDefault();
        window.location.href = ROUTES['notifications'];
        return;
      }
    }

    const headerProfile = e.target.closest('header img[alt="Profile"], header .flex.items-center.gap-space-sm.pl-space-xs');
    if (headerProfile && !currentFolder.includes('user_profile_settings')) {
      e.preventDefault();
      window.location.href = ROUTES['settings-profile'];
      return;
    }

    // 3. Intercept Specific Action Buttons
    const btn = e.target.closest('button, a');
    if (!btn) return;

    const text = (btn.textContent || '').trim();

    // Sign in redirection is handled by login_registration_mediscan_ai/code.html after field validation
    if (btn.id === 'btn-submit' || text.includes('Sign In to Clinical Workspace')) {
      return;
    }

    // "Upload & Analyze" button (on upload screen, let its progress bar animation finish before redirecting)
    if (text.includes('Upload & Analyze') || text.includes('Analyze Scan')) {
      if (currentFolder === 'upload_medical_scan_mediscan_ai') return;
      e.preventDefault();
      window.location.href = ROUTES['ai-analysis'];
      return;
    }

    // "Generate Report" button
    if (text.includes('Generate Report') || text.includes('Create Report')) {
      e.preventDefault();
      window.location.href = ROUTES['reports'];
      return;
    }

    // Viewer / Worklist quick links
    if (text.includes('Open in PACS Viewer') || text.includes('Open Fullscreen DICOM Viewer') || text.includes('Open AI Analysis DICOM Viewer') || text.includes('Launch AI Analysis Viewer')) {
      e.preventDefault();
      window.location.href = ROUTES['ai-analysis'];
      return;
    }

    if (text.includes('Back to Worklist')) {
      e.preventDefault();
      window.location.href = ROUTES['patients'];
      return;
    }

    // Patient PT-20481 quick clicks
    if (text.includes('PT-20481') || text.includes('Review now') || text.includes('View Case') || text.includes('Open in Viewer')) {
      if (text.includes('Open in Viewer') || text.includes('Review now')) {
        e.preventDefault();
        window.location.href = ROUTES['ai-analysis'];
        return;
      }
      if (text.includes('View') || text.includes('PT-20481')) {
        if (!currentFolder.includes('case_details')) {
          e.preventDefault();
          window.location.href = ROUTES['case-details'];
          return;
        }
      }
    }

    // Send Flagged / Cohort to Prioritization
    if (text.includes('Send Flagged to Prioritization') || text.includes('Prioritization Board') || text.includes('Send Cohort to Prioritization') || text === 'Prioritize') {
      e.preventDefault();
      window.location.href = ROUTES['risk-prioritization'];
      return;
    }

    // New Scan / Upload CTA
    if (text.includes('+ New Case') || text.includes('Upload Scan') || text.includes('Upload New Scan') || text.includes('+ Upload DICOM')) {
      e.preventDefault();
      window.location.href = ROUTES['upload-scan'];
      return;
    }

    // Universal demo fallback for any unhandled button or <a href="#">
    if (!e.defaultPrevented && !btn.hasAttribute('onclick') && !btn.hasAttribute('data-ms-handled') && btn.getAttribute('type') !== 'submit' && !btn.closest('#mediscan-quick-dock') && !btn.closest('#mediscan-confirm-modal') && !btn.closest('#mediscan-admin-modal') && !btn.closest('#mediscan-toast-container')) {
      const href = btn.tagName === 'A' ? (btn.getAttribute('href') || '') : '#';
      if (btn.tagName === 'BUTTON' || href === '#' || href === '') {
        if (btn.tagName === 'A') e.preventDefault();
        const label = text || btn.getAttribute('aria-label') || btn.getAttribute('title') || 'Action';
        MediScanUI.toast(`${label} — Action completed (demo)`, 'info');
      }
    }
  });

  // Inject Floating Quick Navigation Hub
  function injectDock() {
    if (document.getElementById('mediscan-quick-dock')) return;

    const dock = document.createElement('div');
    dock.id = 'mediscan-quick-dock';
    dock.innerHTML = `
      <style>
        #mediscan-quick-dock {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 9990;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .md-dock-btn {
          background: #312E81;
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(49, 46, 129, 0.25);
          border: 1px solid rgba(249, 115, 22, 0.4);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .md-dock-btn:hover {
          background: #1E1B4B;
          border-color: #F97316;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(49, 46, 129, 0.35);
        }
        .md-dock-pulse {
          width: 8px;
          height: 8px;
          background-color: #F97316;
          border-radius: 9999px;
          box-shadow: 0 0 8px #F97316;
        }
        .md-dock-menu {
          display: none;
          position: absolute;
          bottom: calc(100% + 10px);
          right: 0;
          width: 320px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 12px 36px rgba(49, 46, 129, 0.16);
          border: 1px solid #E4E2F5;
          padding: 14px;
          max-height: 80vh;
          overflow-y: auto;
        }
        .md-dock-menu.open {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .md-dock-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          color: #1E1B4B;
          font-size: 13px;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .md-dock-item:hover {
          background: #EEF0FF;
          color: #312E81;
        }
        .md-dock-item.active {
          background: #312E81;
          color: #ffffff;
          font-weight: 600;
        }
        .md-dock-header {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #73777e;
          padding: 4px 8px;
          border-bottom: 1px solid #E4E2F5;
          margin-bottom: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      </style>
      <div class="md-dock-menu" id="md-menu">
        <div class="md-dock-header">
          <span>MediScan Clinical Navigation</span>
          <span style="color: #F97316;">Quick Switch</span>
        </div>
        <div style="font-size: 10px; color: #73777e; padding: 2px 8px; font-weight: 600;">CLINICAL WORKFLOW STEPS</div>
        <a href="${ROUTES['login']}" class="md-dock-item ${currentFolder === 'login_registration_mediscan_ai' ? 'active' : ''}">
          <span>1. Login & Verification</span>
        </a>
        <a href="${ROUTES['dashboard']}" class="md-dock-item ${currentFolder.startsWith('main_dashboard') ? 'active' : ''}">
          <span>2. Main Clinical Dashboard</span>
        </a>
        <a href="${ROUTES['upload-scan']}" class="md-dock-item ${currentFolder === 'upload_medical_scan_mediscan_ai' ? 'active' : ''}">
          <span>3. Upload Medical Scan</span>
        </a>
        <a href="${ROUTES['ai-analysis']}" class="md-dock-item ${currentFolder.startsWith('ai_image_analysis') ? 'active' : ''}">
          <span>4. AI Image Analysis (CADe)</span>
        </a>
        <a href="${ROUTES['risk-prioritization']}" class="md-dock-item ${currentFolder.startsWith('risk_prioritization') ? 'active' : ''}">
          <span>5. Risk Triage Board</span>
        </a>
        <a href="${ROUTES['patients']}" class="md-dock-item ${currentFolder === 'patient_management_mediscan_ai' ? 'active' : ''}">
          <span>6. Patient Management</span>
        </a>
        <a href="${ROUTES['case-details']}" class="md-dock-item ${currentFolder === 'case_details_pt_20481_mediscan_ai' ? 'active' : ''}">
          <span>7. Case Details (PT-20481)</span>
        </a>
        <a href="${ROUTES['reports']}" class="md-dock-item ${currentFolder === 'medical_reports_mediscan_ai' ? 'active' : ''}">
          <span>8. Medical Reports (Sign-off)</span>
        </a>
        <a href="${ROUTES['clinical-datasets']}" class="md-dock-item ${currentFolder === 'clinical_dataset_analysis_mediscan_ai' ? 'active' : ''}">
          <span>9. Clinical Datasets (CSV)</span>
        </a>
        <a href="${ROUTES['notifications']}" class="md-dock-item ${currentFolder === 'notifications_mediscan_ai' ? 'active' : ''}">
          <span>10. Alerts & Notifications</span>
        </a>
        <a href="${ROUTES['settings-profile']}" class="md-dock-item ${currentFolder === 'user_profile_settings_mediscan_ai' ? 'active' : ''}">
          <span>11. Clinician Profile & Settings</span>
        </a>
      </div>
      <button class="md-dock-btn" onclick="document.getElementById('md-menu').classList.toggle('open')">
        <span class="md-dock-pulse"></span>
        <span>MediScan AI: <strong>${currentTitle.split(' ')[0]}</strong></span>
        <span style="font-size: 16px;">⥂</span>
      </button>
    `;
    document.body.appendChild(dock);

    document.addEventListener('click', (ev) => {
      if (!dock.contains(ev.target)) {
        const m = document.getElementById('md-menu');
        if (m) m.classList.remove('open');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDock);
  } else {
    injectDock();
  }
})();
