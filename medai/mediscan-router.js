/**
 * MediScan AI - Cross-Screen Clinical Navigation & Workflow Router
 * Interconnects all Stitch-generated standalone prototype screens into a unified, interactive clinical application.
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

  // Inform parent hub (if embedded in index.html)
  if (window.parent && window.parent !== window && currentFolder) {
    try {
      window.parent.postMessage({ type: 'MEDISCAN_PAGE_CHANGED', folder: currentFolder }, '*');
    } catch (e) {}
  }

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
    if (headerLogo && !currentFolder.startsWith('main_dashboard')) {
      e.preventDefault();
      window.location.href = ROUTES['dashboard'];
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

    const headerProfile = e.target.closest('header img[alt="Profile"], header div.flex.items-center.gap-space-sm');
    if (headerProfile && !currentFolder.includes('user_profile_settings')) {
      e.preventDefault();
      window.location.href = ROUTES['settings-profile'];
      return;
    }

    // 3. Intercept Specific Action Buttons
    const btn = e.target.closest('button, a');
    if (!btn) return;

    const text = (btn.textContent || '').trim();

    // Sign in redirection
    if (btn.id === 'btn-submit' || text.includes('Sign In to Clinical Workspace')) {
      setTimeout(() => {
        window.location.href = ROUTES['dashboard'];
      }, 1400);
      return;
    }

    // "Upload & Analyze" button
    if (text.includes('Upload & Analyze') || text.includes('Analyze Scan')) {
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

    // Send Flagged to Prioritization
    if (text.includes('Send Flagged to Prioritization') || text.includes('Prioritization Board')) {
      e.preventDefault();
      window.location.href = ROUTES['risk-prioritization'];
      return;
    }

    // New Scan / Upload CTA
    if (text.includes('+ New Case') || text.includes('Upload Scan') || text.includes('Upload New Scan') || text.includes('+ Upload DICOM Scan')) {
      e.preventDefault();
      window.location.href = ROUTES['upload-scan'];
      return;
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
          background: #15324B;
          color: #ffffff;
          padding: 8px 14px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 16px rgba(21, 50, 75, 0.25);
          border: 1px solid rgba(22, 166, 161, 0.4);
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .md-dock-btn:hover {
          background: #001d33;
          border-color: #16A6A1;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(21, 50, 75, 0.35);
        }
        .md-dock-pulse {
          width: 8px;
          height: 8px;
          background-color: #16A6A1;
          border-radius: 9999px;
          box-shadow: 0 0 8px #16A6A1;
        }
        .md-dock-menu {
          display: none;
          position: absolute;
          bottom: calc(100% + 10px);
          right: 0;
          width: 320px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 12px 36px rgba(21, 50, 75, 0.16);
          border: 1px solid #E2E8F0;
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
          color: #0b1c30;
          font-size: 13px;
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .md-dock-item:hover {
          background: #eff4ff;
          color: #15324b;
        }
        .md-dock-item.active {
          background: #15324b;
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
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      </style>
      <div class="md-dock-menu" id="md-menu">
        <div class="md-dock-header">
          <span>MediScan Clinical Router</span>
          <span style="color: #16A6A1;">Connected (18 Screens)</span>
        </div>
        <a href="${ROUTES['hub']}" class="md-dock-item" style="border: 1px dashed #16A6A1; background: #e5eeff;">
          <span style="font-weight: 700; color: #15324B;">✦ Master Application Hub</span>
        </a>
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
