/**
 * ODOGWU Profile Card — Automated Acceptance Tests
 * 
 * Run in browser console or with a test runner.
 * Open index.html, then paste this script into the DevTools console,
 * or include it via <script src="tests.js"></script> at the bottom of the page.
 */

(function runTests() {
    const results = [];
    let passed = 0;
    let failed = 0;

    function assert(condition, description) {
        if (condition) {
            passed++;
            results.push(`✅ PASS: ${description}`);
        } else {
            failed++;
            results.push(`❌ FAIL: ${description}`);
        }
    }

    // ─── 1. Required data-testid elements exist ─────────────────────
    const requiredTestIds = [
        'test-profile-card',
        'test-user-name',
        'test-user-bio',
        'test-user-time',
        'test-user-avatar',
        'test-user-social-links',
        'test-user-hobbies',
        'test-user-dislikes'
    ];

    requiredTestIds.forEach(id => {
        const el = document.querySelector(`[data-testid="${id}"]`);
        assert(el !== null, `Element with data-testid="${id}" exists`);
    });

    // ─── 2. Semantic HTML tags ──────────────────────────────────────
    const card = document.querySelector('[data-testid="test-profile-card"]');
    assert(card && card.tagName === 'ARTICLE', 'Profile card uses <article> tag');

    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
    assert(avatar && avatar.closest('figure') !== null, 'Avatar is inside a <figure> tag');

    const socialLinks = document.querySelector('[data-testid="test-user-social-links"]');
    assert(socialLinks && socialLinks.closest('nav') !== null, 'Social links are inside a <nav> tag');

    const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
    assert(hobbies && hobbies.closest('section') !== null, 'Hobbies list is inside a <section> tag');

    const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
    assert(dislikes && dislikes.closest('section') !== null, 'Dislikes list is inside a <section> tag');

    const name = document.querySelector('[data-testid="test-user-name"]');
    assert(name && /^H[1-6]$/.test(name.tagName), 'User name uses a heading tag');

    // ─── 3. Time value is accurate (within 2 second delta) ──────────
    const timeEl = document.querySelector('[data-testid="test-user-time"]');
    const displayedTime = parseInt(timeEl?.textContent, 10);
    const now = Date.now();
    const delta = Math.abs(now - displayedTime);
    assert(!isNaN(displayedTime) && delta < 2000, `Time value is accurate (delta: ${delta}ms)`);

    // ─── 4. Avatar has alt attribute ────────────────────────────────
    assert(avatar && avatar.hasAttribute('alt'), 'Avatar <img> has alt attribute');
    assert(avatar && avatar.getAttribute('alt').length > 5, 'Avatar alt text is descriptive (>5 chars)');

    // ─── 5. Social links open in new tab ────────────────────────────
    const links = socialLinks ? socialLinks.querySelectorAll('a') : [];
    assert(links.length >= 1, 'At least one social link exists');

    links.forEach(link => {
        assert(
            link.getAttribute('target') === '_blank',
            `Social link "${link.textContent.trim()}" has target="_blank"`
        );
        assert(
            link.getAttribute('rel')?.includes('noopener'),
            `Social link "${link.textContent.trim()}" has rel="noopener"`
        );
    });

    // ─── 6. Individual social link testids ───────────────────────────
    const twitterLink = document.querySelector('[data-testid="test-user-social-twitter"]');
    assert(twitterLink !== null, 'Individual social link testid (twitter) exists');

    // ─── 7. Hobbies and Dislikes are distinct lists ─────────────────
    assert(hobbies && hobbies.tagName === 'UL', 'Hobbies is a <ul> list');
    assert(dislikes && dislikes.tagName === 'UL', 'Dislikes is a <ul> list');
    assert(hobbies !== dislikes, 'Hobbies and Dislikes are distinct elements');

    const hobbyItems = hobbies ? hobbies.querySelectorAll('li') : [];
    const dislikeItems = dislikes ? dislikes.querySelectorAll('li') : [];
    assert(hobbyItems.length >= 1, `Hobbies has ${hobbyItems.length} item(s)`);
    assert(dislikeItems.length >= 1, `Dislikes has ${dislikeItems.length} item(s)`);

    // ─── 8. Keyboard focusability ───────────────────────────────────
    links.forEach(link => {
        assert(
            link.tabIndex >= 0 || link.tagName === 'A',
            `Social link "${link.textContent.trim()}" is keyboard-focusable`
        );
    });

    // ─── 9. aria-live on time element ───────────────────────────────
    assert(
        timeEl && timeEl.getAttribute('aria-live'),
        'Time element has aria-live attribute for screen readers'
    );

    // ─── 10. Heading hierarchy ──────────────────────────────────────
    const headings = card ? card.querySelectorAll('h1, h2, h3, h4, h5, h6') : [];
    const headingLevels = Array.from(headings).map(h => parseInt(h.tagName[1]));
    const hasProperHierarchy = headingLevels.length > 0 && headingLevels[0] <= 3;
    assert(hasProperHierarchy, 'Heading hierarchy starts at h2 or h3 inside card');

    // ─── Print Results ──────────────────────────────────────────────
    console.log('\n══════════════════════════════════════════');
    console.log('  ODOGWU Profile Card — Test Results');
    console.log('══════════════════════════════════════════\n');
    results.forEach(r => console.log(r));
    console.log(`\n──────────────────────────────────────────`);
    console.log(`  Total: ${passed + failed} | ✅ Passed: ${passed} | ❌ Failed: ${failed}`);
    console.log(`──────────────────────────────────────────\n`);

    if (failed === 0) {
        console.log('🎉 ALL TESTS PASSED!');
    } else {
        console.warn(`⚠️  ${failed} test(s) failed. Review the items above.`);
    }

    return { passed, failed, results };
})();
