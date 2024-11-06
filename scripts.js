function showAdminLogin() {
  document.getElementById('adminLoginForm').style.display = 'block';
  document.getElementById('staffLoginForm').style.display = 'none';
  document.getElementById('adminBtn').classList.add('active');
  document.getElementById('staffBtn').classList.remove('active');
}

function showStaffLogin() {
  document.getElementById('staffLoginForm').style.display = 'block';
  document.getElementById('adminLoginForm').style.display = 'none';
  document.getElementById('staffBtn').classList.add('active');
  document.getElementById('adminBtn').classList.remove('active');
}

function redirectToAdminPage() {
  document.getElementById('loginPage').style.display = 'none';
  document.getElementById('adminMainPage').style.display = 'block';
}

function logout() {
  document.getElementById('adminMainPage').style.display = 'none';
  document.getElementById('loginPage').style.display = 'block';
}

function showAddStaffForm() {
  document.getElementById('addStaffForm').style.display = 'block';
}

function hideAddStaffForm() {
  document.getElementById('addStaffForm').style.display = 'none';
}

function enableUpdateMode() {
  document.querySelectorAll('.update-btn').forEach(btn => btn.style.display = 'inline');
  document.querySelectorAll('.delete-btn').forEach(btn => btn.style.display = 'none');
}

function enableDeleteMode() {
  document.querySelectorAll('.delete-btn').forEach(btn => btn.style.display = 'inline');
  document.querySelectorAll('.update-btn').forEach(btn => btn.style.display = 'none');
}

function confirmDelete() {
  if (confirm("Are you sure you want to delete this staff member?")) {
    alert("Staff member deleted!");
  }
}
